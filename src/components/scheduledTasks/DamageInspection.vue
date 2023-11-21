<script>
import {IonItem, IonList, IonLabel, IonInput, IonText} from "@ionic/vue";
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
export default {
  name: "DamageInspection",
  components: {BaseAccordionLayout, IonLabel, IonList, IonInput, IonItem, IonText}
}
</script>

<template>
<base-accordion-layout header-name="Damage Inspection" accordion-value="first">
  <ion-item slot="content">
    <ion-input label-placement="floating" type="text" >
      <div slot="label">Location <ion-text color="danger">(Required)</ion-text></div>
    </ion-input>
  </ion-item>
  <ion-item slot="content">
    <ion-label>New Damage?</ion-label>
    <ion-radio></ion-radio>
  </ion-item>
  <ion-item slot="content">

  </ion-item>
  <ion-item slot="content">

  </ion-item>
  <ion-item slot="content">
    <ion-label>Emergency Action neeeded?</ion-label>
    <ion-radio></ion-radio>
  </ion-item>
  <ion-item slot="content">
    <ion-input label-placement="floating" type="text" >
      <div slot="label">Comments</div>
    </ion-input>
  </ion-item>
</base-accordion-layout>
</template>

<style scoped lang="scss">

</style>
