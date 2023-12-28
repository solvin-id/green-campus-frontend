export const state = () => ({
  allTree: [],
  validTreeSlugs: []
})

export const mutations = {
  getTree (state, allTree) {
    state.allTree = allTree
  },
  setValidSlugs (state, slug) {
    state.validTreeSlugs.push(slug)
    localStorage.setItem('addValidTreeSlug', JSON.stringify(slug))
  }
}

export const actions = {
  // ANCHOR - GetAllTree From API
  async getAllTree ({ commit }) {
    try {
      const response = await this.$axios.$get('tree/all')
      const trees = response.data
      commit('getTree', trees)
    } catch (error) {
      console.log(error)
    }
  },

  addValidTreeSlug ({ commit }, slug) {
    commit('setValidSlugs', slug)
  }
}

export const getters = {
  getTree: (state) => {
    return state.allTree
  }
}
