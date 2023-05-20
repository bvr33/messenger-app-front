<script setup lang="ts">
import { RouterView } from 'vue-router'
//
import appNavbar from '@/core/components/appNavbar.vue'
import appHeader from '@/core/components/appHeader.vue'
</script>

<template>
  <app-header>
    <app-navbar />
  </app-header>
  <RouterView />
</template>
