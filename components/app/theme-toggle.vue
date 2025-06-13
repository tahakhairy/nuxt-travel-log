<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <input
      v-model="isDark"
      class="theme-controller"
      type="checkbox"
    >

    <Icon
      class="swap-off fill-current"
      name="tabler:sun"
      size="40"
    />

    <Icon
      class="swap-on h-10 w-10 fill-current"
      name="tabler:moon-filled"
      size="40"
    />
  </label>
</template>
