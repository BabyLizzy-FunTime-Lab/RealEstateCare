<template>
<base-layout>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label>
        <h2>User Information</h2>
      </ion-label>
    </ion-list-header>
    <ion-avatar slot="">
      <ion-img alt="Icon-Image of the user." :src="loginStore.getUserAvatar"/>
    </ion-avatar>
    <ion-item v-for="(value, key) in loginStore.getUserInfo">
      <ion-label>{{ key.toUpperCase() }}:</ion-label>
      {{ value }}
    </ion-item>
    <ion-button @click="loginStore.logoutUser"
                v-if="loginStore.loginStatus"
                expand="full" color="primary"
                router-link="/">Logout</ion-button>
    <ion-button v-else expand="full"
                color="primary"
                router-link="/">Login</ion-button>
  </ion-list>
</base-layout>
</template>

<script>
import {IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonButton, IonImg} from "@ionic/vue";
import {useLoginStore} from "@/stores/LoginStore.js";
export default {
  name: "UserInfo",
  components: {IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonButton, IonImg},
  data() {
    return {
      loginStore: useLoginStore()
    }
  }
}
</script>

<style scoped lang="scss">
ion-avatar {
  height: 12em;
  width: 12em;
  margin: 1em auto 1em auto;
}
ion-button {
  margin-top: 2em;
}
ion-item {
  text-transform: capitalize;
}
</style>
