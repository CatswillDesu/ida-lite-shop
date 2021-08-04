<template>
  <ul class="products-catalog">
    <CatalogItem
      v-for="product in $store.getters['products/sortedList']"
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :photo-url="product.photo"
      :rating="4.5"
    />
  </ul>
</template>

<script>
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
    await this.$store.dispatch('products/fetchProducts', this.catalogId)
  }
}
</script>

<style>
.products-catalog {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
