<script setup lang="ts">
const { user } = storeToRefs(useAuthStore());
</script>

<template>
  <UContainer class="rounded-2xl bg-primary-100/80 dark:bg-slate-700 container mx-auto mt-4">
    <div class="text-center min-h-96 flex justify-center items-center text-default">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple travel log app. Add locations, photos, and notes to create a digital journal of your journeys
        </p>
        <AuthButton v-if="!user" />
        <NuxtLink v-else to="/dashboard">
          <UButton label="Start Logging" />
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
