<template>
  <button
    class="button"
    :class="{ centered, uppercase, block }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    centered: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  $emits: ['click']
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 8px;
  padding: 14px 18px;
  background-color: $black;
  font-size: 16px;
  color: $white;
  cursor: pointer;
  transition-property: background-color;
  @include basic-duration;

  &.centered {
    text-align: center;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.block {
    display: block;
    width: 100%;
  }

  &:hover {
    background-color: $grey;
  }
}
</style>
