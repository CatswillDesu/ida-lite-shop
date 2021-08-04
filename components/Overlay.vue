<template>
  <div v-if="!isOverlayHidden" class="overlay">
    <Loader />
  </div>
</template>

<script>
export default {
  computed: {
    isOverlayHidden() {
      return this.$store.state.isOverlayHidden
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
