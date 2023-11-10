<script>
import {IonList, IonListHeader, IonLabel, IonItem} from "@ionic/vue";
import {useLoginStore} from "@/stores/LoginStore.js";

export default {
  name: "SettingsView",
  components: {
    IonList, IonListHeader, IonLabel, IonItem
  },
  data() {
    return {
      loginStore: useLoginStore()
    }
  }
}
</script>

<template>
<base-layout>
  <ion-list>
    <ion-list-header color="primary">
      <ion-label>
        <h2>Settings</h2>
      </ion-label>
    </ion-list-header>
    <ion-item>
      Dark mode toggle
    </ion-item>
    <ion-item>
      Other app settings.
    </ion-item>
  </ion-list>
</base-layout>
</template>

<style scoped lang="scss">

</style>
