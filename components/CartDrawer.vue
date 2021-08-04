<template>
  <div class="cart-drawer" :class="{ open: isOpen }">
    <header class="cart-header">
      <span class="label">Корзина</span>
      <button class="close-button" @click="$store.dispatch('cart/closeCart')">
        <CloseIcon />
      </button>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.cart.isCartOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-drawer {
  position: fixed;
  z-index: 7;
  top: 0;
  right: -460px;
  min-width: 460px;
  height: 100vh;
  padding: 48px;
  background-color: $white;
  transition-property: right;
  @include basic-duration;

  &.open {
    right: 0;
  }

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .label {
      font-size: 32px;
      font-weight: bold;
    }

    .close-button {
      background-color: unset;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
