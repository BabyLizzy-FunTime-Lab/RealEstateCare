<script>
import {IonItem, IonList, IonLabel, IonInput,
  IonText, IonTextarea, IonDatetime,
  IonDatetimeButton, IonModal, IonRadioGroup, IonRadio} from "@ionic/vue";
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
export default {
  name: "DamageInspection",
  components: {BaseAccordionLayout, IonLabel,
    IonList, IonInput, IonItem, IonText,
    IonTextarea, IonDatetime, IonDatetimeButton,
    IonModal, IonRadioGroup, IonRadio},
  data() {
    return {
      locationInput: "",
      newDamageInput: ""
    }
  }
}
</script>

<template>
<base-accordion-layout header-name="Damage Inspection" accordion-value="first">
  <ion-item slot="content">
    <ion-input label="Location"
               v-model="locationInput"
               label-placement="floating"
               type="text"/>
  </ion-item>
  <ion-item slot="content">
    <ion-label>New Damage?</ion-label>
    <ion-radio-group v-model="newDamageInput" name="newDamage">
        <ion-radio justify="end" value="yes">Yes</ion-radio>
        <ion-radio justify="end" value="no">No</ion-radio>
    </ion-radio-group>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Date</ion-label>
    <ion-datetime-button presentation="date" datetime="date"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime presentation="date" id="date"></ion-datetime>
    </ion-modal>
  </ion-item>
  <ion-item slot="content">
    <ion-label>Damage Type</ion-label>

  </ion-item>
  <ion-item slot="content">
    <ion-label>Emergency Action needed?</ion-label>
    <ion-radio></ion-radio>
  </ion-item>
  <ion-item slot="content">
    <ion-textarea label="Comments" label-placement="floating" placeholder="Enter your comments"></ion-textarea>
  </ion-item>
</base-accordion-layout>
</template>

<style scoped lang="scss">

</style>
