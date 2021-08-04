export const state = () => ({
  list: [],
  sortBy: 'default',
  sortTypes: ['default', 'price']
})

export const mutations = {
  changeSortType(state, type) {
    state.sortBy = type
  },
  setProductList(state, list) {
    state.list = list
  }
}

export const actions = {
  async fetchProducts({ commit }, categoryId) {
    const list = await this.$axios.$get(`/api/product?category=${categoryId}`)
    commit('setProductList', list)
  }
}

export const getters = {
  sortedList: (state) => {
    switch (state.sortBy) {
      case 'price':
        return [...state.list].sort((a, b) => a.price - b.price)
      case 'default':
        return state.list
    }
  }
}
