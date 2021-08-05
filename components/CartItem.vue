<template>
  <div class="cart-item">
    <div class="photo-cover" :style="[photoStyles]" />
    <div class="content">
      <span class="name">{{ name.toLowerCase() }}</span>
      <span class="price">{{ price.toLocaleString('fi-FI') }} ₽</span>
      <span class="quantity">{{ quantity }} шт.</span>
    </div>
    <button class="remove-button" @click="removeCartItem({ id, quantity })">
      <TrashIcon />
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true
    },
    photoUrl: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      photoStyles: {
        backgroundImage: this.photoUrl
          ? `url(${this.$axios.defaults.baseURL + this.photoUrl})`
          : `url(${require('~/static/img/product-placeholder.png')})`
      }
    }
  },
  methods: {
    ...mapMutations({
      removeCartItem: 'cart/removeCartItem'
    })
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  width: 100%;
  padding: 15 25px;
  margin-bottom: 12px;

  .photo-cover {
    width: 70px;
    height: 90px;
    margin-right: 35px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .content {
    display: flex;
    flex-direction: column;

    .name {
      max-width: 170px;
      margin-bottom: 10px;
      font-size: 14px;
      text-transform: capitalize;
      color: $grey;
    }

    .price {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 14px;
    }

    .quantity {
      font-weight: bold;
      font-size: 14px;
    }
  }

  .remove-button {
    align-self: center;
    border: unset;
    margin-left: auto;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
