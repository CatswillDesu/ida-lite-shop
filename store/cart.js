export const state = () => ({
  isCartOpen: false,
  cartItems: []
})

export const mutations = {
  openCart(state) {
    state.isCartOpen = true
  },

  closeCart(state) {
    state.isCartOpen = false
  },

  addCartItem(state, newItem) {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === newItem.id
    )

    if (itemIndex === -1) {
      state.cartItems.push({
        ...newItem,
        quantity: 1
      })
    } else {
      state.cartItems[itemIndex].quantity++
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  },

  setCartItems(state, newCartItems) {
    state.cartItems = newCartItems
  },

  removeCartItem(state, itemToRemove) {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === itemToRemove.id
    )

    if (itemIndex < 0) return

    const isLast = state.cartItems[itemIndex].quantity <= 1
    if (!isLast) {
      state.cartItems[itemIndex].quantity--
    } else {
      state.cartItems.splice(itemIndex, 1)
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  }
}

export const actions = {
  openCart({ commit }) {
    commit('closeMobileSidebar', null, { root: true })
    commit('showOverlay', null, { root: true })
    commit('openCart')
  },

  closeCart({ commit }) {
    commit('hideOverlay', null, { root: true })
    commit('closeCart')
  },

  getPersistedCartItems({ commit }) {
    const persistedCartItems = JSON.parse(localStorage.getItem('cartItems'))
    if (persistedCartItems) {
      commit('setCartItems', persistedCartItems)
    }
  }
}

export const getters = {
  totalCount(state) {
    return state.cartItems.reduce((count, item) => {
      return count + item.quantity
    }, 0)
  }
}
