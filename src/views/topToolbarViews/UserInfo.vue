<template>
<base-layout>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label>
        <h2>User Info</h2>
      </ion-label>
      <ion-item>
        <ion-avatar>

        </ion-avatar>
      </ion-item>
    </ion-list-header>
    <ion-button color="primary">Logout</ion-button>
  </ion-list>
</base-layout>
</template>

<script>
import {IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonButton} from "@ionic/vue";
import {useLoginStore} from "@/stores/LoginStore.js";
export default {
  name: "UserInfo",
  components: {IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonButton},
  data() {
    return {
      loginStore: useLoginStore()
    }
  }
}
</script>

<style scoped>

</style>
