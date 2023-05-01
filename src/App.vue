<script setup lang="ts">
import { RouterView } from 'vue-router'
//
import appNavbar from '@/components/appNavbar.vue'
import appHeader from '@/components/appHeader.vue'
</script>

<template>
  <app-header>
    <app-navbar />
  </app-header>
  <RouterView />
</template>
