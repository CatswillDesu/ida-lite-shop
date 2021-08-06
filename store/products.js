import { compareByName } from '~/util'

export const state = () => ({
  list: [],
  sortBy: 'default',
  sortTypes: ['default', 'priceDesc', 'priceAsc', 'name']
})

export const mutations = {
  changeSortType(state, type) {
    state.sortBy = type
  },
  setProductList(state, { list, categoryId }) {
    state.list = list

    const sessionProducts = JSON.parse(sessionStorage.getItem('products'))
    sessionProducts[categoryId] = list
    sessionStorage.setItem(`products`, JSON.stringify(sessionProducts))
  }
}

export const actions = {
  async fetchProducts({ commit }, categoryId) {
    const list = await this.$axios.$get(`/api/product?category=${categoryId}`)
    commit('setProductList', { list, categoryId })
  },

  initSessionStorage() {
    const products = sessionStorage.getItem('products')
    if (!products) {
      sessionStorage.setItem('products', JSON.stringify({}))
    }
  },

  getProductsFromSession({ commit }, categoryId) {
    const sessionProducts = JSON.parse(sessionStorage.getItem('products'))
    if (sessionProducts[categoryId]) {
      commit('setProductList', {
        list: sessionProducts[categoryId],
        categoryId
      })
      return true
    }
    return false
  }
}

export const getters = {
  sortedList: (state) => {
    switch (state.sortBy) {
      case 'priceAsc':
        return [...state.list].sort((a, b) => a.price - b.price)
      case 'priceDesc':
        return [...state.list].sort((a, b) => b.price - a.price)
      case 'name':
        return [...state.list].sort(compareByName)
      case 'default':
        return state.list
    }
  }
}
