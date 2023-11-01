<script>
import {IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel} from "@ionic/vue";

export default {
  name: "BottomTabs",
  components: {
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel
  }
}
</script>

<template>
  <ion-tabs>
    <ion-router-outlet/>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="active-task" href="/tabs/active-task">
        <ion-label>Active task</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="search" href="/tabs/search">
        <ion-label>Search</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="information" href="/tabs/information">
        <ion-label>Information</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<style scoped lang="scss">
ion-tabs {
  //background-color: black;
}
</style>
