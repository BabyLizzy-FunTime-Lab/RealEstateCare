<script>
import {
  IonItem, IonList, IonLabel, IonInput,
  IonText, IonTextarea, IonDatetime,
  IonDatetimeButton, IonModal, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton
} from "@ionic/vue";
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
import BaseSaveButton from "@/components/base/BaseSaveButton.vue";
import {useInspectionStore} from "@/stores/InspectionStore.js";

export default {
  name: "DamageInspection",
  components: {
    IonButton, BaseAccordionLayout, BaseSaveButton, IonLabel,
    IonList, IonInput, IonItem, IonText,
    IonTextarea, IonDatetime, IonDatetimeButton,
    IonModal, IonRadioGroup, IonRadio, IonSelect, IonSelectOption},
  data() {
    return {
      inspectionStore: useInspectionStore(),
      inspectionInputData: {
        location: "",
        newDamage: "",
        dateInput: new Date().toISOString(),
        selectedDamageTypeOption: "",
        damageTypeInput: "",
        emergencyInput: "",
        commentsInput: ""
      }
    }
  },
  methods: {
    saveData() {
      console.log("Saving Damage Inspection data...");
    },
    setDamageType() {
      this.inspectionInputData.damageTypeInput = this.inspectionInputData.selectedDamageTypeOption;
    },
  }
}
</script>

<template>
<base-accordion-layout header-name="Damage Inspection" accordion-value="first">
  <ion-item slot="content">
    <ion-input label="Location"
               v-model="inspectionInputData.location"
               placeholder="Input address"
               label-placement="floating"
               type="text"/>
  </ion-item>
  <ion-item slot="content">
    <ion-label>New Damage?</ion-label>
    <ion-radio-group v-model="inspectionInputData.newDamage"
                     name="newDamage">
        <ion-radio aria-label="Yes" label-placement="start" justify="end" value="yes">Yes</ion-radio>
        <ion-radio aria-label="No" label-placement="start" justify="end" value="no">No</ion-radio>
    </ion-radio-group>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Date</ion-label>
    <ion-datetime-button aria-label="Date" presentation="date" datetime="date"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime v-model="inspectionInputData.dateInput"
                    presentation="date" id="date"></ion-datetime>
    </ion-modal>
  </ion-item>
  <ion-item slot="content">
    <ion-select v-model="inspectionInputData.selectedDamageTypeOption"
                label="Damage Type" placeholder="Select" :ioChange="setDamageType">
      <ion-select-option value="deliberately">Deliberately</ion-select-option>
      <ion-select-option value="wear">Wear</ion-select-option>
      <ion-select-option value="violence">Violence</ion-select-option>
      <ion-select-option value="normal use">Normal Use</ion-select-option>
      <ion-select-option value="calamity">Calamity</ion-select-option>
      <ion-select-option value="other">Other</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item slot="content" v-if="inspectionInputData.selectedDamageTypeOption === 'other'">
    <ion-input v-model="inspectionInputData.damageTypeInput" label="Input damage type"
               label-placement="floating" placeholder="Here" type="text"></ion-input>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Emergency Action needed?</ion-label>
    <ion-radio-group v-model="inspectionInputData.emergencyInput"
                     name="emergency">
      <ion-radio aria-label="Yes" label-placement="start" justify="end" value="yes">Yes</ion-radio>
      <ion-radio aria-label="No" label-placement="start" justify="end" value="no">No</ion-radio>
    </ion-radio-group>
  </ion-item>
  <ion-item slot="content">
    <ion-textarea label="Comments"
                  v-model="inspectionInputData.commentsInput"
                  label-placement="floating"
                  :auto-grow="true"
                  placeholder="Enter your comments"></ion-textarea>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Photos</ion-label>
    <ion-button color="primary">Take Photo</ion-button>
  </ion-item>
  <BaseSaveButton slot="content" name="Save" @click="saveData"/>
</base-accordion-layout>
</template>

<style scoped lang="scss">

</style>
