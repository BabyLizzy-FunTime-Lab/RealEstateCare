<script>
import {
  IonItem, IonList, IonLabel, IonInput,
  IonText, IonTextarea, IonDatetime,
  IonDatetimeButton, IonModal, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton
} from "@ionic/vue";
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
import {useInspectionStore} from "@/stores/InspectionStore.js";

export default {
  name: "DamageInspection",
  components: {
    IonButton, BaseAccordionLayout, IonLabel,
    IonList, IonInput, IonItem, IonText,
    IonTextarea, IonDatetime, IonDatetimeButton,
    IonModal, IonRadioGroup, IonRadio, IonSelect, IonSelectOption},
  data() {
    return {
      inspectionStore: useInspectionStore(),
      inspectionInputData: {
        id: "",
        inspectorId: "",
        location: "",
        new_damage: "",
        complete_date: new Date().toISOString(),
        selected_damage_category: "",
        damage_category: "",
        emergency: "",
        description: "",
        images: []
      }
    }
  },
  methods: {
    saveData() {
      let data = this.inspectionInputData;
      delete data.selected_damage_category;
      // new data gets added a new id.
      delete data.id;
      console.log(data);
      // the inspectorId is added by the saveDamageInspections function.
      this.inspectionStore.saveDamageInspections();
      console.log("Saving Damage Inspection data...");
    },
    setDamageType() {
      this.inspectionInputData.damage_category = this.inspectionInputData.selected_damage_category;
    },
  }
}
</script>

<template>
<base-accordion-layout header-name="Damage Inspection" accordion-value="first" :on-save-click="saveData">
  <ion-item slot="content">
    <ion-input label="Location"
               v-model="inspectionInputData.location"
               placeholder="Input address"
               label-placement="floating"
               type="text"/>
  </ion-item>
  <ion-item slot="content">
    <ion-label>New Damage?</ion-label>
    <ion-radio-group v-model="inspectionInputData.new_damage"
                     name="newDamage">
        <ion-radio aria-label="Yes" label-placement="start" justify="end" value="yes">Yes</ion-radio>
        <ion-radio aria-label="No" label-placement="start" justify="end" value="no">No</ion-radio>
    </ion-radio-group>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Date</ion-label>
    <ion-datetime-button aria-label="Date" presentation="date" datetime="date"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime v-model="inspectionInputData.complete_date"
                    displayFormat="MMM D, YYYY"
                    pickerFormat="MMM D YYYY"
                    presentation="date" id="date"></ion-datetime>
    </ion-modal>
  </ion-item>
  <ion-item slot="content">
    <ion-select v-model="inspectionInputData.selected_damage_category"
                label="Damage Type" placeholder="Select" :ioChange="setDamageType">
      <ion-select-option value="deliberately">Deliberately</ion-select-option>
      <ion-select-option value="wear">Wear</ion-select-option>
      <ion-select-option value="violence">Violence</ion-select-option>
      <ion-select-option value="normal use">Normal Use</ion-select-option>
      <ion-select-option value="calamity">Calamity</ion-select-option>
      <ion-select-option value="other">Other</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item slot="content" v-if="inspectionInputData.selected_damage_category === 'other'">
    <ion-input v-model="inspectionInputData.damage_category" label="Input damage type"
               label-placement="floating" placeholder="Here" type="text"></ion-input>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Emergency Action needed?</ion-label>
    <ion-radio-group v-model="inspectionInputData.emergency"
                     name="emergency">
      <ion-radio aria-label="Yes" label-placement="start" justify="end" value="yes">Yes</ion-radio>
      <ion-radio aria-label="No" label-placement="start" justify="end" value="no">No</ion-radio>
    </ion-radio-group>
  </ion-item>
  <ion-item slot="content">
    <ion-textarea label="Comments"
                  v-model="inspectionInputData.description"
                  label-placement="floating"
                  :auto-grow="true"
                  placeholder="Enter your comments"></ion-textarea>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Photos</ion-label>
    <ion-button color="primary">Take Photo</ion-button>
  </ion-item>
</base-accordion-layout>
</template>

<style scoped lang="scss">

</style>
