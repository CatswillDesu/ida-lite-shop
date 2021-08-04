<template>
  <div class="category-catalog">
    <SortSelect />
    <Catalog :catalog-id="$route.params.id" />
  </div>
</template>

<style lang="scss" scoped>
.category-catalog {
  display: flex;
  flex-direction: column;
}
</style>
