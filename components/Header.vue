<template>
  <header class="header">
    <nav class="header-nav">
      <div class="logo">
        <nuxt-link to="#">TestList</nuxt-link>
      </div>
    </nav>
    <CartIcon class="cart-icon" />
    <button class="nav-button" @click="toggleMobileSidebar">
      <MenuIcon width="24" height="27" />
    </button>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleMobileSidebar: 'toggleMobileSidebar'
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 90px;
  margin-bottom: 20px;
  background-color: $white;

  .logo {
    font-size: 22px;
    font-weight: bold;
    color: $grey;
  }

  .nav-button {
    display: none;
  }
}

@media screen and (max-width: 1050px) {
  .header {
    justify-content: flex-start;
    padding: 10px 40px;

    .cart-icon {
      margin-left: auto;
    }

    .nav-button {
      display: inline-flex;
      padding: 5px 10px 8px;
      border: unset;
      margin-left: 25px;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>
