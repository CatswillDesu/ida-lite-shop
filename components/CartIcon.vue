<template>
  <div class="cart-icon" @click="$store.dispatch('cart/openCart')">
    <CartVector />
    <div class="batch">0</div>
  </div>
</template>

<style lang="scss" scoped>
.cart-icon {
  position: relative;
  padding: 5px 10px;
  cursor: pointer;

  .batch {
    position: absolute;
    top: 0px;
    right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: $grey-light;
    font-size: 9px;
    color: $white;
  }
}
</style>
