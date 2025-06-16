<script setup lang="ts">

</script>

<template>
  <div class="navbar bg-primary text-primary-content px-6">
    <div class="navbar-start">
      <NuxtLink to="/" class=" text-xl font-bold mx-3">
        <h1>Travel Log</h1>
      </NuxtLink>
    </div>

    <div class="navbar-end items-center flex gap-4">
      <AppThemeToggle />

      <AuthButton />
    </div>
  </div>
</template>
