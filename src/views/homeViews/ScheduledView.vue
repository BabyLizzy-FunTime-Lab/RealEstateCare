<script>
import {IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonAccordionGroup} from "@ionic/vue";
import baseListLayout from "@/components/base/BaseListLayout.vue";
import DamageInspection from "@/components/scheduledTasks/DamageInspection.vue";
import BacklogMaintenance from "@/components/scheduledTasks/BacklogMaintenance.vue";
import TechnicalInstallationInspection from "@/components/scheduledTasks/TechnicalInstallationInspection.vue";
import Modifications from "@/components/scheduledTasks/Modifications.vue";
export default {
  name: "ScheduledView",
  components: {IonList, IonItem, IonListHeader,
    IonInput, IonLabel, IonButton, baseListLayout, IonAccordionGroup,
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

    <p>Each form should have a unique id, the client location, send date and the inspector id.</p>
  </base-layout>
</template>

<style scoped lang="scss">

</style>
