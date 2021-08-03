<template>
  <div>
    <Header />
    <main>
      <CategoriesSidebar />
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {}
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
</style>
