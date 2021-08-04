export const state = () => ({
  isCartOpen: true,
  cartList: []
})

export const mutations = {
  openCart(state) {
    state.isCartOpen = true
  },

  closeCart(state) {
    state.isCartOpen = false
  }
}

export const actions = {
  openCart({ commit }) {
    commit('showOverlay', null, { root: true })
    commit('openCart')
  },

  closeCart({ commit }) {
    commit('hideOverlay', null, { root: true })
    commit('closeCart')
  }
}
