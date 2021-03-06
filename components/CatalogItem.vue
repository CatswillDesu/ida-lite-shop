<template>
  <li class="catalog-item">
    <div class="content">
      <span class="rating">
        <RatingStar />
        <span class="score">{{ rating }}</span>
      </span>
      <div class="photo-cover" :style="[photoStyles]" />
      <button
        class="add-button"
        @click="addCartItem({ id, name, price, photoUrl, rating })"
      >
        <CartVector width="14" height="14" />
      </button>
    </div>
    <div class="footer">
      <span class="name">{{ name.toLowerCase() }}</span>
      <span class="price">{{ price.toLocaleString('fi-FI') }} ₽</span>
    </div>
  </li>
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
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    photoUrl: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 4.5
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
      addCartItem: 'cart/addCartItem'
    })
  }
}
</script>

<style lang="scss">
.catalog-item {
  display: flex;
  flex-direction: column;
  padding: 18px 16px;
  margin: 8px;
  background-color: $white;
  overflow: hidden;

  .content {
    display: flex;
    align-items: flex-start;

    .rating {
      display: flex;
      align-items: center;

      .score {
        font-size: 12px;
        font-weight: bold;
        color: #f2c94c;
      }
    }

    .photo-cover {
      width: 140px;
      height: 180px;
      margin-bottom: 20px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .add-button {
      background-color: unset;
      border: none;
      cursor: pointer;

      svg .fill-element {
        fill: $grey-light;
        transition-property: fill;
        @include basic-duration;
      }

      &:hover {
        svg .fill-element {
          fill: $black;
          transition-property: fill;
          @include basic-duration;
        }
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;

    .name {
      max-width: 200px;
      margin-bottom: 6px;
      font-size: 14px;
      color: $grey;
      text-transform: capitalize;
    }

    .price {
      font-weight: bold;
    }
  }
}
</style>
