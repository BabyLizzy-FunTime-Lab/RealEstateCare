<script>
import {IonLabel, IonList, IonListHeader, IonButtons, IonBackButton} from "@ionic/vue";

export default {
  name: "BaseListLayout",
  components: {IonListHeader, IonList, IonLabel, IonButtons, IonBackButton},
  props: {
    listHeaderName: String
  }
}
</script>

<template>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label><h2>{{listHeaderName}}</h2></ion-label>
      <ion-buttons>
        <ion-back-button defaultHref="/" text="back">Test</ion-back-button>
      </ion-buttons>
    </ion-list-header>
    <slot></slot>
  </ion-list>
</template>

<style scoped lang="scss">

</style>
