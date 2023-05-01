<script lang="ts" setup>
//
import CameraItem from '@/components/chat/call-board/cameraItem.vue'
import CallControls from '@/components/chat/call-board/callControls.vue'
//
</script>

<template>
  <div class="call-board">
    <div class="cameras-board">
      <camera-item />
      <camera-item />
      <camera-item />
    </div>
    <div class="controls">
      <call-controls />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.call-board {
  box-sizing: content-box;
  overflow: hidden;
  flex: 1 0 auto;
  padding: 10px;
  background-color: $color-primary;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  box-shadow: #00000059 0px -30px 46px -28px inset;
  border-radius: $border-radius;
}
.controls {
  box-sizing: content-box;
  border-radius: $border-radius;
  padding: 10px;
  gap: 10px;
  width: max-content;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: $color-white;
  font-size: 1.5rem;
  justify-content: space-around;
  color: $color-white;
}

.cameras-board {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 10px;
}
</style>
