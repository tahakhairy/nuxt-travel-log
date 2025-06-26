<script setup lang="ts">
import { UButton } from "#components";

const { loading, user } = storeToRefs(useAuthStore());
const { signIn } = useAuthStore();
</script>

<template>
  <UDropdownMenu
    v-if="!loading && user"
    size="lg"
    :items="[{
      label: 'Sign Out',
      slot: 'icon' as const,
      onSelect() {
        navigateTo('/sign-out')
      },
    }]"
  >
    <UButton
      :label="`${user.name}`"
      color="neutral"
      variant="outline"
      icon="i-lucide-menu"
    >
      <template #leading>
        <UAvatar
          v-if="user.image"
          size="sm"
          :src="user.image"
        />
      </template>
    </UButton>

    <template #icon-leading>
      <Icon
        name="tabler:logout-2"
        size="24"
        class="text-error-500"
      />
    </template>
  </UDropdownMenu>
  <UButton
    v-else
    :disabled="loading"
    @click="signIn"
  >
    Sign In with Github
    <Icon
      v-if="loading"
      name="tabler:loader-2"
      class="animate-spin"
      size="24"
    />
    <Icon
      v-else
      name="tabler:brand-github"
      size="24"
    />
  </UButton>
</template>

<style scoped>

</style>
