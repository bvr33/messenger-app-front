<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/chat">Chat</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  gap: 20px;
}

a {
  color: $color-white;
  text-decoration: none;
  text-transform: capitalize;
}

a:hover {
  color: $color-secondary-lighter;
}

.router-link-active,
.router-link-exact-active {
  color: $color-third;
}
</style>
