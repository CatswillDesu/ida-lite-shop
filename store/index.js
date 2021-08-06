export const state = () => ({
  isLoading: false,
  isOverlayHidden: true,
  isMobileSidebarOpen: false
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
  },

  openMobileSidebar(state) {
    state.isMobileSidebarOpen = true
  },

  closeMobileSidebar(state) {
    state.isMobileSidebarOpen = false
  },

  toggleMobileSidebar(state) {
    state.isMobileSidebarOpen = !state.isMobileSidebarOpen
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
