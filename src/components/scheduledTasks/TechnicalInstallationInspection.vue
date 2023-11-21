<script>
import BaseAccordionLayout from "@/components/base/BaseAccordionLayout.vue";
import {IonItem, IonLabel} from "@ionic/vue";

export default {
  name: "TechnicalInstallationInspection",
  components: {BaseAccordionLayout, IonItem, IonLabel}
}
</script>

<template>
<BaseAccordionLayout header-name="Technical Installation Inspection" accordion-value="third">
  <ion-item slot="content">
    <ion-label>Pokémon Yellow</ion-label>
  </ion-item>
</BaseAccordionLayout>
</template>

<style scoped lang="scss">

</style>
