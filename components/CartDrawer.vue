<template>
  <div class="cart-drawer" :class="{ open: isOpen }">
    <header class="cart-header">
      <span class="label">Корзина</span>
      <button class="close-button" @click="$store.dispatch('cart/closeCart')">
        <CloseIcon />
      </button>
    </header>
    <transition name="fade">
      <ul
        v-if="$store.getters['cart/totalCount'] && !isOrderSent"
        class="cart-items"
      >
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
    </transition>
    <transition name="fade">
      <div
        v-if="!$store.getters['cart/totalCount'] && !isOrderSent"
        class="empty-alert"
      >
        <p class="message">Пока что вы ничего не добавили в корзину.</p>
        <Button centered block @click="$store.dispatch('cart/closeCart')">
          Перейти к выбору
        </Button>
      </div>
    </transition>
    <transition name="fade">
      <OrderForm v-if="$store.getters['cart/totalCount'] && !isOrderSent" />
    </transition>
    <transition name="slide">
      <div v-if="isOrderSent" class="success-message">
        <HandOkEmoji class="emoji" />
        <span class="title">Заявка успешно отправлена</span>
        <span class="subtitle">Вскоре наш менеджер свяжется с Вами</span>
      </div>
    </transition>
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
    },
    isOrderSent() {
      return this.$store.state.orderData.isOrderSent
    }
  },
  mounted() {
    this.$store.dispatch('cart/getPersistedCartItems')
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
  display: flex;
  flex-direction: column;
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
      margin-top: 0;
      margin-bottom: 24px;
      font-size: 22px;
    }
  }

  .cart-items,
  .empty-alert {
    margin-bottom: 32px;
  }

  .success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    .emoji {
      margin-bottom: 24px;
    }

    .title {
      font-size: 25px;
      font-weight: bold;
    }

    .subtitle {
      font-size: 16px;
      color: $grey;
    }
  }
}

@media screen and (max-width: 600px) {
  .cart-drawer {
    min-width: 100vw;
    width: 100vw;
    padding: 25px;
  }
}

// animations
.slide-enter-active,
.slide-leave-active {
  transition-property: transform, opacity;
  transition-delay: 0.4s;
  transition-duration: 0.8s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(500px);
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
