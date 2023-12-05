<script>
import {IonLabel, IonList, IonListHeader, IonButtons, IonButton, IonIcon} from "@ionic/vue";
import {arrowBack} from "ionicons/icons";

export default {
  name: "BaseListLayout",
  methods: {
    arrowBack() {
      return arrowBack
    },
  },
  components: {IonListHeader, IonList, IonLabel, IonButtons, IonButton, IonIcon},
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
        <ion-button router-link="/">
          <ion-icon :icon="arrowBack()"/>
        </ion-button>
      </ion-buttons>
    </ion-list-header>
    <slot></slot>
  </ion-list>
</template>

<style scoped lang="scss">

</style>
