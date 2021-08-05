<template>
  <div class="sort-select">
    <span>
      Сортировать по:
      <span class="current-type" @click="toggleSortSelect">
        {{ getSortTypeLabel(sortBy) }}
        <SmallArrow class="arrow" :class="{ rotated: open }" />
      </span>
    </span>
    <transition name="slide">
      <div v-show="open" class="options">
        <div
          v-for="option in sortTypes"
          :key="option"
          class="option"
          :class="{ selected: sortBy === option }"
          @click="selectType(option)"
        >
          {{ getSortTypeLabel(option) }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      open: false
    }
  },
  computed: {
    sortTypes() {
      return this.$store.state.products.sortTypes
    },
    sortBy() {
      return this.$store.state.products.sortBy
    }
  },
  methods: {
    toggleSortSelect() {
      this.open = !this.open
    },
    getSortTypeLabel(type) {
      switch (type) {
        case 'default':
          return 'умолчанию'
        case 'price':
          return 'цене'
      }
    },
    selectType(type) {
      this.changeSortType(type)
      this.toggleSortSelect()
    },
    ...mapMutations({
      changeSortType: 'products/changeSortType'
    })
  }
}
</script>

<style lang="scss" scoped>
.sort-select {
  position: relative;
  display: inline-flex;
  align-self: flex-end;
  margin-top: 20px;
  margin-bottom: 45px;

  .current-type {
    display: inline-flex;
    color: $grey;
    cursor: pointer;
    transition-property: color;
    @include basic-duration;

    .arrow {
      align-self: flex-end;
      margin-left: 6px;
      margin-bottom: 6px;
      transition-property: transform;
      @include basic-duration;

      &.rotated {
        transform: rotate(-90deg);
      }
    }

    &:hover {
      color: $black;
    }
  }

  .options {
    position: absolute;
    bottom: -70px;
    right: 0;
    width: 160px;
    padding: 6px 0;
    border-radius: 10px;
    background-color: $white;
    box-shadow: 0px 0px 20px -5px $grey;

    .option {
      padding: 4px 8px;
      color: $grey-light;
      cursor: pointer;
      transition-property: background-color;
      @include basic-duration;

      &.selected {
        background-color: $grey-extra-light;
        color: $black;
      }

      &:hover {
        background-color: darken($grey-extra-light, 5%);
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transform-origin: top;
}

// animations
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
