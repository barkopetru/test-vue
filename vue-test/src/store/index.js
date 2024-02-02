import {createStore} from "vuex";
import user from "./modules/users.js";
import conversations from "./modules/conversations.js";

export const store = createStore({
    modules: {
        user,
        conversations
    }
})