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
      default: null,
      requried: true
    }
  },
  async fetch() {
    if (!this.catalogId) return
    this.$store.dispatch('showLoaderWithOverlay')
    await this.$store.dispatch('products/fetchProducts', this.catalogId)
    this.$store.dispatch('hideLoaderWithOverlay')
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
</style>
