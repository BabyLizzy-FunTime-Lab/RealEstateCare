<script>
import {IonList, IonItem, IonInput} from "@ionic/vue";

export default {
  name: "LoginForm",
  components: {IonList, IonItem, IonInput}
}
</script>

<template>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label>
        <h2>Login</h2>
      </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-input label="username:"/>
    </ion-item>
    <ion-item>
      <ion-input label="password:"/>
    </ion-item>
    <ion-button expand="full" color="primary">Go!</ion-button>
  </ion-list>
  <p>Needs username and password</p>
  <p>On login the userID gets updated in the state.</p>
  <p>If userID is null, all buttons lead to the login screen.</p>
  <p>User data is stored as json, no hashing for this prototype.</p>
</template>

<style scoped lang="scss">
ion-button {
  margin-top: 2em;
}
</style>
