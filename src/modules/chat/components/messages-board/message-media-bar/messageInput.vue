<script setup lang="ts">
import { Icon } from '@iconify/vue'
import iconButton from '@/core/components/buttons/iconButton.vue'
//
</script>

<template>
  <span class="message">
    <input type="text" placeholder="Aa" />
    <icon-button tooltip="emoji">
      <Icon icon="solar:emoji-funny-square-outline" />
    </icon-button>
  </span>
</template>

<style lang="scss" scoped>
.message {
  padding: 0 10px;
  overflow: visible;
  background-color: $color-white;
  color: $color-black;
  height: 100%;
  width: 100%;
  display: flex;
  place-items: center;
  border-radius: $border-radius;
  gap: 10px;

  input[type='text'] {
    padding: 5px;
    font-size: 1.2rem;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background-color: inherit;

    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
