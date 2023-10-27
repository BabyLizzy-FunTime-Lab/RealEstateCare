<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ store.getStoreTest }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <strong>Ready to create an app?</strong>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {useHouseStore} from "@/stores/HouseStore.js";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      store: useHouseStore()
    }
  }
}
</script>

<style scoped>
ion-toolbar {
  color: var(--ion-text-color-light);
}
</style>
