import {getCurrentUser} from "../../_common/services/user-service.js";

const state = {
    user: ""
};

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    },


};

const actions = {
    setUser: async function({ commit }) {
        commit("setUser", await getCurrentUser());
    },
};
const user = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
};

export default user;