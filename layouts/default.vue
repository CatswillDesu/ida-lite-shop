<template>
  <div class="prevent-scroll">
    <Header />
    <main>
      <CategoriesSidebar />
      <nuxt />
    </main>
    <CartDrawer />
    <transition name="fade">
      <Overlay />
    </transition>
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

.fade-enter-active {
  animation: fade 0.3s;
}

.fade-leave-active {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
