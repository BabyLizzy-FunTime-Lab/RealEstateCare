<script>
import {IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/vue";
import baseListLayout from "@/components/base/BaseListLayout.vue";
import DamageInspection from "@/components/scheduledTasks/DamageInspection.vue";
import BacklogMaintenance from "@/components/scheduledTasks/BacklogMaintenance.vue";
import TechnicalInstallationInspection from "@/components/scheduledTasks/TechnicalInstallationInspection.vue";
import Modifications from "@/components/scheduledTasks/Modifications.vue";
export default {
  name: "ScheduledView",
  components: {IonList, IonItem, IonListHeader,
    IonInput, IonLabel, IonButton, baseListLayout,
    DamageInspection, BacklogMaintenance, TechnicalInstallationInspection, Modifications}
}
</script>

<template>
  <base-layout>
    <base-list-layout list-header-name="Scheduled Tasks">
      <ion-accordion-group :multiple="true">
        <DamageInspection/>
        <BacklogMaintenance/>
        <TechnicalInstallationInspection/>
        <Modifications/>
      </ion-accordion-group>
    </base-list-layout>

    <p>We'll use v-if to show the individual forms onclick. The forms are made as components.</p>
    <p>Each form get it's own send button and gets automaticaly tagged with the id of the logged in inspector.</p>
    <p>the forms are dropdowns. All can be open and closed at anytime so teh user may copy paste if needed.</p>
    <p>The location input is bound to variable to prevent typos.</p>
    <p>Data is structured as a json array with 4 categories. One category for each type of form.</p>
    <p>Each form should have a unique id, the client location, send date and the inspector id.</p>
  </base-layout>
</template>

<style scoped lang="scss">

</style>
