export const state = () => ({
  isLoading: false,
  isOverlayHidden: true
})

export const mutations = {
  showOverlay(state) {
    state.isOverlayHidden = false
  },

  hideOverlay(state) {
    state.isOverlayHidden = true
  },

  showLoader(state) {
    state.isLoading = true
  },

  hideLoader(state) {
    state.isLoading = false
  }
}

export const actions = {
  showLoaderWithOverlay({ commit }) {
    commit('showOverlay')
    commit('showLoader')
  },
  hideLoaderWithOverlay({ commit }) {
    commit('hideOverlay')
    commit('hideLoader')
  }
}
