<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
const primary = ref("rgb(var(--v-theme-primary))");
const secondary = ref("rgb(var(--v-theme-secondary))");
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <div class="logo-container">
        <img src="/images/logos/logo.png" height="35" alt="user" />
        <div class="logo-text">H365 Ad Network</div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-text {
  font-size: 16px;
  font-weight: 900;
  color: #373737;
}

.logo a {
  text-decoration: none;
}
</style>

