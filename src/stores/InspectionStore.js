import {defineStore} from "pinia";
import {useLoginStore} from "@/stores/LoginStore.js";
import axios from "axios";

// Default variables.
const baseDbUrl = "https://real-estate-care-json-1205608aa6ef.herokuapp.com";
const loginStore = useLoginStore();

export const useInspectionStore = defineStore('inspections', {
    state: () => {
        return {
            loadingStatus: false,
            damage_control_result: [],
            backlog_maintenance_result: [],
            technical_installation_inspections_result: [],
            inventory_of_changes_result: [],
            damageInspection: {
                inspectorId: "",
                locationInput: "",
                newDamageInput: "",
                dateInput: new Date().toISOString(),
                selectedDamageTypeOption: "",
                damageTypeInput: "",
                emergencyInput: "",
                commentsInput: ""
            },
            backlogMaintenance: {
                inspectorId: "",
                locationInput: "",
                maintenanceTypeInput: "",
                costIndication: ""
            },
            technicalInstallation: {
                inspectorId: "",
                locationInput: "",
                installationTypeInput: "",
                reportedFaultInput: "",
                testProcedureInput: "",
                approvedInput: "",
                commentsInput: ""
            },
            modifications: {
                inspectorId: "",
                historyRecordLink: "",
                locationInput: "",
                modifiedByInput: "",
                descriptionInput: "",
                necessaryActionInput: "",
                commentsInput: ""
            }
        }
    },
    actions: {
        fetchInspections(type) {
            this.loadingStatus = true;
            axios.get(baseDbUrl + "/inspections")
                .then(result => {
                    console.log(type);
                    console.log(result.data);
                })
            },
        fetchDamageInspections() {

        },
        saveDamageInspections(state) {
            console.log(loginStore.getUserInfo.id);
        },
        fetchBacklogMaintenance() {

        },
        fetchModifications() {

        },
        fetchTechnicalInstallations() {

        },
        setDamageInspections() {

        },
        setBacklogMaintenance() {

        },
        setModifications() {

        },
        setTechnicalInstallations() {

        },
        setDamageType(state) {
            state.damageTypeInput = state.selectedDamageTypeOption;
        },
        setInputValue() {
            // Needs the value, the inspection type and the name of the state variable
            // as arguments.
        }
    },
    getters: {

    }
})
