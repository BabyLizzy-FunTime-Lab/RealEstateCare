<script>
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue";

export default {
  name: "TopToolBar",
  components: {IonTitle, IonHeader, IonToolbar}
}
</script>

<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <div class="top"></div>
      <div class="bottom">
        <ion-title>Real Estate Care</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped lang="scss">
ion-toolbar {
  color: var(--ion-text-color-light);
  align-items: normal;
  .top {
    height: 1em;
    background-color: cadetblue;
  }
}
</style>
