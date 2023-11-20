import {defineStore} from "pinia";
import axios from "axios";

// Default variables.
const baseBbUrl = "https://my-json-server.typicode.com/BabyLizzy-FunTime-Lab/RealEstateCare";
const defaultAvatar = "/icons/toolbar/toolbar-default-avatar.svg";

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            checkLoginStore: 'Store works',
            loadingStatus: false,
            loginStatus: false,
            userInfo: Object,
            userAvatar: defaultAvatar,
            errorMessage: null
        }
    },
    actions: {
        fetchUser(inputName, inputPassword) {
            this.loadingStatus = true
            // This should happen on the server.
            axios.get(baseBbUrl + "/user_inspector")
                .then(result => {
                    result.data.forEach( user => {
                        if(user.name === inputName && user.password === inputPassword) {
                            this.loginStatus = true;
                            this.userInfo = {
                                id: user.id,
                                name: user.name,
                                access: user.access,
                            }
                            if(user.avatar !== "") {
                                this.userAvatar = user.avatar;
                            }
                            this.errorMessage = null;
                            console.log("Login successful");
                        }
                    })
                    if(!this.userInfo.id) {
                        this.errorMessage = "User was not found or the password is incorrect.";
                        console.warn("Login problem: User was not found or password incorrect");
                    }
                    this.loadingStatus = false
                })
                .catch(err => {
                    this.loadingStatus = false;
                    this.userInfo = {};
                    this.errorMessage = err.message;
                    console.warn("We got an error on login", this.errorMessage);
                })
        },
        setErrorMessage(errValue) {
            this.errorMessage = errValue;
        },
        logoutUser() {
            console.log("Logging out...");
            this.loginStatus = false;
            this.loadingStatus = false;
            this.userInfo = {};
            this.userAvatar = defaultAvatar;
            this.errorMessage = null;
            console.log("Logout complete.");
        }
    },
    getters: {
        getLoginStatus(state) {
            return state.loginStatus;
        },
        getUserInfo(state) {
            return state.userInfo;
        },
        getUserAvatar(state) {
            return state.userAvatar;
        }
    }
})
