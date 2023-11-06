import {defineStore} from "pinia";

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            checkLoginStore: 'Store works'
        }
    },
    getters: {
        getCheckLoginStore(state) {
            return state.checkLoginStore;
        }
    }
})
