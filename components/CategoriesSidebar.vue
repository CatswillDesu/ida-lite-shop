<template>
  <aside class="catalog-sidebar">
    <h1 class="title">Каталог</h1>
    <nav class="categories-nav">
      <ul v-if="categories.length" class="categories-list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="category-item"
        >
          <nuxt-link :to="`/category/${category.id}`">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get('/product-category')
  }
}
</script>

<style lang="scss" scoped>
.catalog-sidebar {
  width: 230px;
  min-height: 100vh;
  height: 100%;

  .title {
    margin-top: 10px;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
  }

  .category-item {
    padding: 8px 0;
    font-size: 16px;
    color: $grey;
    transition-property: color;
    @include basic-duration;

    &:hover {
      color: $grey-light;
      transition-property: color;
      @include basic-duration;
    }
  }
}
</style>
