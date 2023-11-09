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
        fetchUser(inputName, inputPassword) {
            this.loadingStatus = true
            // This should happen on the server.
            axios.get(baseBbUrl + "/user-inspector")
                .then(result => {
                    result.data.forEach( user => {
                        if(user.name === inputName && user.password === inputPassword) {
                            this.userId = user.id;
                        }
                    })
                    if(this.userId === null) {
                        alert("user not found or password incorrect");
                    }
                    this.loadingStatus = false
                    console.log(result);
                })
                .catch(err => {
                    this.loadingStatus = false;
                    this.userId = null;
                    this.errors = err;
                    console.warn("We got an error on login");
                    console.warn(this.errors);
                })
        }
    },
    getters: {
        getCheckLoginStore(state) {
            return state.checkLoginStore;
        }
    }
})
