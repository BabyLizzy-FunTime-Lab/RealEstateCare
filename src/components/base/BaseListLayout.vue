<script>
import {IonLabel, IonList, IonListHeader} from "@ionic/vue";

export default {
  name: "BaseListLayout",
  components: {IonListHeader, IonList, IonLabel},
  props: {
    listHeaderName: String
  }
}
</script>

<template>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label><h2>{{listHeaderName}}</h2></ion-label>
    </ion-list-header>
    <slot></slot>
  </ion-list>
</template>

<style scoped lang="scss">

</style>
