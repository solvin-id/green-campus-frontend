export const state = () => ({
  treeLocations: []
})

export const mutations = {
  setTreeLocations (state, treeLocations) {
    state.treeLocations.push(treeLocations)
  }
}

export const actions = {
  // ANCHOR - GetTreeLocation From API
  async getAllTreeLocations ({ commit }, treeLocationIds) {
    try {
      for (const treeLocationId of treeLocationIds) {
        const response = await this.$axios.$get(`tree/check/${treeLocationId}`)
        const treeLocation = response.data
        commit('setTreeLocations', treeLocation)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getters = {
  setTreeLocations: (state) => {
    return state.treeLocations
  }
}
