import {defineStore} from "pinia";
import axios from "axios";
const baseBbUrl = "https://my-json-server.typicode.com/BabyLizzy-FunTime-Lab/RealEstateCare";

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            checkLoginStore: 'Store works',
            loadingStatus: false,
            userId: null,
            errors: null
        }
    },
    actions: {
        fetchUser() {
            this.loadingStatus = true
            // This should happen on the server.
            axios.get(baseBbUrl + "user-inspector")
                .then(result => {
                    console.log(result);
                })
        }
    },
    getters: {
        getCheckLoginStore(state) {
            return state.checkLoginStore;
        }
    }
})
