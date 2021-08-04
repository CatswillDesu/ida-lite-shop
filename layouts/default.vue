<template>
  <div class="prevent-scroll">
    <Header />
    <main>
      <CategoriesSidebar />
      <nuxt />
    </main>
    <Overlay />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.watch(({ isOverlayHidden }) => {
      if (!isOverlayHidden) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    })
  }
}
</script>

<style lang="scss">
html {
  font-family: 'PT Sans', sans-serif;
  box-sizing: border-box;
  color: $black;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: $grey-extra-light;
}

a {
  color: unset;
  text-decoration: unset;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

main {
  display: flex;
  padding: 0 90px;
}

.prevent-scroll {
  overflow: hidden;
}
</style>
