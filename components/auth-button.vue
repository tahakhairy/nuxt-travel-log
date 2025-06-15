<script setup lang="ts">
const { loading } = storeToRefs(useAuthStore());
const { signIn } = useAuthStore();
</script>

<template>
  <button
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
