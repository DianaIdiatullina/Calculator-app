export const state = () => ({
  popupState: false,
  popupData: null
})

export const mutations = {
  openPopup (state, { name, data }) {
    state.popupState = name
    if (data) state.popupData = data
  },
  closePopup (state) {
    state.popupState = false
  }
}

export const getters = {}

export const actions = {}
