<script setup lang="ts">
import logoIcon from '@/core/components/icons/logoIcon.vue'
</script>

<template>
  <header class="app-header padding">
    <div class="logo-wrapper">
      <span class="icon-wrap">
        <logo-icon />
      </span>
    </div>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background-color: $color-primary;
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

svg {
  fill: $color-white;
}

.logo-wrapper {
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.icon-wrap {
  display: flex;
  justify-content: center;
  width: max-content;
  height: 100%;

  svg {
    height: 100%;
    aspect-ratio: 1/1;
  }
}
</style>
