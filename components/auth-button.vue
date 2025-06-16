<script setup lang="ts">
const { loading, user } = storeToRefs(useAuthStore());
const { signIn, signOut } = useAuthStore();
</script>

<template>
  <div v-if="!loading && user" class="dropdown drawer-end ">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      <div v-if="user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="user?.image" :alt="user.name">
        </div>
      </div>
      {{ user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <button @click="signOut">
          <Icon name="tabler:logout-2" size="24" /> Sign Out
        </button>
      </li>
    </ul>
  </div>
  <button
    v-else
    :disabled="loading"
    class="btn btn-accent"
    @click="signIn"
  >
    Sign In with Github
    <span v-if="loading" class="loading loading-spinner loading-lg" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="20"
    />
  </button>
</template>

<style scoped>

</style>
