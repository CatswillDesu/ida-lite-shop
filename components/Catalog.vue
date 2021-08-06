<template>
  <ul class="products-catalog">
    <transition-group name="sort-list" tag="ul">
      <CatalogItem
        v-for="product in $store.getters['products/sortedList']"
        :id="product.id"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :photo-url="product.photo"
        :rating="4.5"
      />
    </transition-group>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    catalogId: {
      type: String,
      required: true
    }
  },
  computed: {
    productsList() {
      return this.$store.state.products.list
    }
  },
  async mounted() {
    const didPersist = await this.$store.dispatch(
      'products/getProductsFromSession',
      this.catalogId
    ) // getting from session storage if set
    if (!didPersist) {
      // if not, then fetch from api
      await this.$store.dispatch('showLoaderWithOverlay')
      await this.$store.dispatch('products/fetchProducts', this.catalogId)
      await this.$store.dispatch('hideLoaderWithOverlay')
    }
  },
  methods: {
    ...mapMutations({
      showLoader: 'showOverlay',
      hideLoader: 'hideLoader'
    })
  }
}
</script>

<style lang="scss">
.products-catalog ul {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

// animations
.sort-list-move {
  transition: transform 1s;
}

@media screen and (max-width: 1050px) {
  .products-catalog ul {
    justify-content: center;
  }
}
</style>
