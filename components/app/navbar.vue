<script setup lang="ts">

</script>

<template>
  <nav class="text-primary-content py-4 border-b border-default">
    <div class="flex justify-between items-center px-8">
      <NuxtLink to="/" class=" text-xl font-bold ">
        <h1>Travel Log</h1>
      </NuxtLink>
      <div class="navbar-end items-center flex gap-4">
        <ClientOnly>
          <AppThemeToggle />
        </ClientOnly>
        <AuthButton />
      </div>
    </div>
  </nav>
</template>
