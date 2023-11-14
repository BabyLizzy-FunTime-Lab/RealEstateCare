import {defineStore} from "pinia";

export const useInspectionStore = defineStore('inspections', {
    state: () => {
        return {
            checkInspectionStore: 'Store works!'
        }
    },
    actions: {

    },
    getters: {
        getCheckInspectionStore(state) {
            return state.checkInspectionStore;
        }
    }
})
