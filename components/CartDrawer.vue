<template>
  <div class="cart-drawer" :class="{ open: isOpen }">
    <header class="cart-header">
      <span class="label">Корзина</span>
      <button class="close-button" @click="$store.dispatch('cart/closeCart')">
        <CloseIcon />
      </button>
    </header>
    <ul v-if="$store.getters['cart/totalCount']" class="cart-items">
      <li class="label">
        <span>Товары в корзине</span>
      </li>
      <CartItem
        v-for="item in cartItems"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :photo-url="item.photoUrl"
        :quantity="item.quantity"
      />
    </ul>
    <div v-else class="empty-alert">
      <p class="message">Пока что вы ничего не добавили в корзину.</p>
      <Button centered block @click="$store.dispatch('cart/closeCart')">
        Перейти к выбору
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.cart.isCartOpen
    },
    cartItems() {
      return this.$store.state.cart.cartItems
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
  width: 460px;
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
    margin-bottom: 24px;

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

  .cart-items {
    max-height: 400px;
    overflow-y: auto;

    .label {
      margin-bottom: 16px;
      font-size: 18px;
      color: $grey;
    }
  }

  .empty-alert {
    .message {
      margin-bottom: 24px;
      font-size: 22px;
    }
  }
}
</style>
