<template>
  <aside class="catalog-sidebar" :class="{ open: isMobileSidebarOpen }">
    <header class="sidebar-header">
      <h1 class="title">Каталог</h1>
      <button class="close-button" @click="closeMobileSidebar">
        <CloseIcon />
      </button>
    </header>
    <nav class="categories-nav">
      <ul v-if="categories.length" class="categories-list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="category-item"
        >
          <nuxt-link
            :to="`/category/${category.id}`"
            @click.native="closeMobileSidebar"
          >
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get('/api/product-category')
  },
  computed: {
    isMobileSidebarOpen() {
      return this.$store.state.isMobileSidebarOpen
    }
  },
  methods: {
    ...mapMutations({
      closeMobileSidebar: 'closeMobileSidebar'
    })
  }
}
</script>

<style lang="scss" scoped>
.catalog-sidebar {
  min-width: 230px;
  min-height: 100vh;
  height: 100%;

  .title {
    margin-top: 10px;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
  }

  .close-button {
    display: none;
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

@media screen and (max-width: 1050px) {
  .catalog-sidebar {
    position: fixed;
    z-index: 6;
    top: 0;
    left: -290px;
    min-width: 260px;
    padding: 0 15px 0 30px;
    background-color: $grey-extra-light;
    box-shadow: -12px 0px 50px $grey;
    transition-property: left;
    @include basic-duration;

    &.open {
      left: 0;
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .close-button {
        display: inline-flex;
        border: unset;
        background-color: transparent;
        padding: 5px 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
