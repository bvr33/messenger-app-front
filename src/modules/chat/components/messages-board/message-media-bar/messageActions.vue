<script lang="ts" setup>
import { Icon } from '@iconify/vue'
//
import iconButton from '@/core/components/buttons/iconButton.vue'
</script>

<template>
  <icon-button tooltip="more">
    <Icon icon="solar:add-circle-outline" />
  </icon-button>

  <icon-button tooltip="send file">
    <Icon icon="solar:file-outline" />
  </icon-button>
</template>
