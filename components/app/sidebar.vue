<script setup lang="ts">
const sidebarBtns = ref([
  {
    label: "Locations",
    icon: "tabler:map",
    to: "/dashboard",
  },
  {
    label: "Add Location",
    icon: "tabler:circle-plus-filled",
    to: "/dashboard/add",
  },
  {
    label: "Sign Out",
    icon: "tabler:logout-2",
    to: "/sign-out",
  },
]);

const isSidebarOpen = ref(true);

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}
</script>

<template>
  <div
    class="bg-accented/60 transition-all duration-300"
    :class="{ 'basis-64': isSidebarOpen, 'basis-18': !isSidebarOpen }"
  >
    <div
      class="flex justify-end my-2.5 px-2.5"
      :class="{ '!justify-center': !isSidebarOpen }"
    >
      <UButton
        size="xl"
        variant="ghost"
        class="cursor-pointer"
        :icon="isSidebarOpen ? 'tabler:chevron-left' : 'tabler:chevron-right'"
        @click="toggleSidebar"
      />
    </div>

    <div class="flex flex-col gap-2 px-2 my-2">
      <template v-for="btn, index in sidebarBtns" :key="btn.label">
        <NuxtLink
          :class="{ 'bg-secondary-200/40 dark:bg-neutral-900/50 rounded-md': $route.path === btn.to }"
          :to="btn.to"
        >
          <UTooltip
            :content="{
              align: 'center',
              side: 'right',
              sideOffset: 8,
            }"
            :text="btn.label"
            :disabled="isSidebarOpen"
          >
            <UButton
              variant="ghost"
              class="w-full cursor-pointer text-nowrap"
              :class="{ 'flex justify-center items-center': !isSidebarOpen }"
            >
              <Icon :name="btn.icon" size="24" />
              <Transition name="grow">
                <span v-if="isSidebarOpen" class="">{{ btn.label }}</span>
              </Transition>
            </UButton>
          </UTooltip>
        </NuxtLink>
        <USeparator
          v-if="index === sidebarBtns.length - 2"
          orientation="horizontal"
          class="h-2.5 px-2.5"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.1s;
}
.grow-leave-active {
  animation: grow 0.1s reverse;
}

@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
