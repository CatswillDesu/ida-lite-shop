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
      console.log('new item added')
    } else {
      state.cartItems[itemIndex].quantity++
      console.log('item quantity incremented')
    }
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

export const getters = {
  totalCount(state) {
    return state.cartItems.reduce((count, item) => {
      return count + item.quantity
    }, 0)
  }
}
