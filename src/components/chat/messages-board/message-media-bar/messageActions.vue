<script lang="ts" setup>
import { Icon } from '@iconify/vue'
//
import IconButton from '@/components/other/buttons/iconButton.vue'
</script>

<template>
  <icon-button tooltip="more">
    <Icon icon="iconoir:add-circle" />
  </icon-button>

  <icon-button tooltip="send file">
    <Icon icon="iconoir:empty-page" />
  </icon-button>
</template>
