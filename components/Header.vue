<template>
  <header class="header">
    <nav class="header-nav">
      <div class="logo">
        <nuxt-link to="#">TestList</nuxt-link>
      </div>
    </nav>
    <CartIcon />
  </header>
</template>

<script>
export default {}
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
}
</style>
