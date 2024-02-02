import {getConversations} from "../../chat/services/conversation-service.js";

const state = {
    conversations: ""
};

const mutations = {
    setConversations: (state, conversations) => {
        state.conversations = conversations;
    },
};

const actions = {
    setConversations: async function({ commit }) {
        commit("setConversations", await getConversations());
    },
};
const conversations = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
};

export default conversations;