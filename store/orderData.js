export const state = () => ({
  name: '',
  phone: '',
  address: '',
  isOrderSent: false
})

export const mutations = {
  changeName(state, value) {
    state.name = value
  },

  changePhone(state, value) {
    state.phone = value
  },

  changeAddress(state, value) {
    state.address = value
  },

  setOrderAsSent(state) {
    state.isOrderSent = true
  },

  toggleOrderSent(state) {
    state.isOrderSent = !state.isOrderSent
  }
}
