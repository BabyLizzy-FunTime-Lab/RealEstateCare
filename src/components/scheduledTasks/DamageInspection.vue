<script>
import {IonItem, IonList, IonLabel, IonInput} from "@ionic/vue";
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
export default {
  name: "DamageInspection",
  components: {BaseAccordionLayout, IonLabel, IonList, IonInput, IonItem}
}
</script>

<template>
<base-accordion-layout header-name="Damage Inspection" accordion-value="first">
    <ion-item slot="content">
      <ion-label>Pokémon Yellow</ion-label>
    </ion-item>
    <ion-item slot="content">
      <ion-input label-placement="floating" type="text" >
        <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
      </ion-input>
    </ion-item>
</base-accordion-layout>
</template>

<style scoped lang="scss">

</style>
