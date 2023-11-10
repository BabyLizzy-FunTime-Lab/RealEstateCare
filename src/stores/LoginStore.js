import {defineStore} from "pinia";
import axios from "axios";
const baseBbUrl = "https://my-json-server.typicode.com/BabyLizzy-FunTime-Lab/RealEstateCare";

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            checkLoginStore: 'Store works',
            loadingStatus: false,
            loginStatus: false,
            userInfo: Object,
            errorMessage: null
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
                            this.loginStatus = true;
                            this.userInfo = {
                                userId: user.id,
                                userName: user.name,
                                userAccess: user.access,
                                userAvatar: "/icons/toolbar/toolbar-default-avatar.svg"
                            }
                            if(user.avatar !== "") {
                                this.userInfo.userAvatar = user.avatar;
                            }
                            this.errorMessage = null;
                            console.log("Login successful");
                        }
                    })
                    if(!this.userInfo.userId) {
                        this.errorMessage = "User was not found or the password is incorrect.";
                        console.warn("Login problem: User was not found or password incorrect");
                    }
                    this.loadingStatus = false
                })
                .catch(err => {
                    this.loadingStatus = false;
                    this.userId = null;
                    this.errorMessage = err.message;
                    console.warn("We got an error on login", this.errorMessage);
                })
        },
        setErrorMessage(errValue) {
            this.errorMessage = errValue;
        }
    },
    getters: {
        getLoginStatus(state) {
            return state.loginStatus;
        },
        getUserInfo(state) {
          return "derp";

        },
    }
})
