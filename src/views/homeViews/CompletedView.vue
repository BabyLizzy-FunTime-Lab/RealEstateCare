<script>
import {IonLabel, IonList, IonListHeader} from "@ionic/vue";
import {useInspectionStore} from "@/stores/InspectionStore.js";

export default {
  name: "CompletedView",
  components: {IonListHeader, IonLabel, IonList},
  data() {
    return {
      inspectionStore: useInspectionStore()
    }
  }
}
</script>

<template>
  <base-layout>
    <ion-list>
      <ion-list-header @click="inspectionStore.fetchInspections('damage_control')" color="primary">
        <ion-label><h2>Completed</h2></ion-label>
      </ion-list-header>
    </ion-list>
  </base-layout>
</template>

<style scoped lang="scss">

</style>
