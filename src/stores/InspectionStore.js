import {defineStore} from "pinia";
import axios from "axios";

// Default variables.
const baseBbUrl = "https://my-json-server.typicode.com/BabyLizzy-FunTime-Lab/RealEstateCare";

export const useInspectionStore = defineStore('inspections', {
    state: () => {
        return {
            checkInspectionStore: 'Store works!',
            loadingStatus: false,
            damage_control_result: [],
            backlog_maintenance_result: [],
            technical_installation_inspections_result: [],
            inventory_of_changes_result: [],
            damageInspection: {
                locationInput: "",
                newDamageInput: "",
                dateInput: new Date().toISOString(),
                selectedDamageTypeOption: "",
                damageTypeInput: "",
                emergencyInput: "",
                commentsInput: ""
            }
        }
    },
    actions: {
        fetchInspections(type) {
            this.loadingStatus = true;
            axios.get(baseBbUrl + "/inspections")
                .then(result => {
                    console.log(type);
                    console.log(result.data);
                })
            },
        setDamageType(state) {
            state.damageTypeInput = state.selectedDamageTypeOption;
        }
    },
    getters: {
        getCheckInspectionStore(state) {
            return state.checkInspectionStore;
        }
    }
})
