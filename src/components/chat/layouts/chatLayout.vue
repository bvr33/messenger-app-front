<template>
  <main>
      <slot name="left-panel" />
    <slot name="board" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>
