<script setup lang="ts">
import UserInfoPanel from '@/components/chat/user-info-bar/userInfoPanel.vue'
</script>

<template>
  <div class="panel">
    <div class="chat-list">
      <slot />
    </div>

    <user-info-panel class="bottom-data" />
  </div>
</template>
<style lang="scss" scoped>
.panel {
  flex: 0 1 auto;
  height: 100%;
  min-width: 300px;
  width: 400px;
  padding: 10px;
  gap: 10px;
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $color-gray;

  .chat-list {
    height: 100%;
    padding: 0;
    padding-right: 10px;
    color: $color-gray;
    display: flex;
    flex-direction: column;
    overflow: hidden scroll;
    gap: 5px;
    box-shadow: #0000000f 0px 2px 4px 0px inset;
    border-bottom: 1px solid $color-gray;
    border-radius: $border-radius;
  }

  .bottom-data {
    padding: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: $border-radius;
    flex: 1 0 auto;
    width: 100%;
    height: 70px;
  }
}
</style>
