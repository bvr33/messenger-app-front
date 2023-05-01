<script setup lang="ts">
withDefaults(
  defineProps<{
    tooltip: string
    ttPosition: 'top' | 'bottom'
  }>(),
  { ttPosition: 'top' }
)
</script>

<template>
  <button class="icon-btn">
    <span class="tooltip" :class="`tooltip-${ttPosition}`">{{ tooltip }}</span>
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.icon-btn {
  display: flex;
  position: relative;
  font-size: inherit;
  color: inherit;
  height: max-content;

  .tooltip {
    z-index: 10000;
    position: absolute;
    background-color: $color-gray;
    border-radius: $border-radius;
    color: white;
    padding: 5px 10px;
    font-size: 1rem;
    margin: 10px 0;
    left: 50%;
    transform: translateX(-50%);
    will-change: transform;
    opacity: 0;
    visibility: hidden;
    transition: all 200ms ease-out;
    transition-delay: 0.3s;

    &.tooltip-bottom {
      top: 100%;
    }
    &.tooltip-top {
      bottom: 100%;
    }
  }

  &:hover {
    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
