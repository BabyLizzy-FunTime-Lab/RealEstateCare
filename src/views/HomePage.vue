<template>
  <ion-page>
    <TopToolBar/>
    <ion-content :fullscreen="true">
      <div class="container">
        <strong>Ready to create an app?</strong>
      </div>
      <ion-button>
        Left Icon
      </ion-button>
      <ion-button>
        Right Icon
      </ion-button>
      <ion-button>
        Test
      </ion-button>
      <ion-button>
        Test
      </ion-button>
    </ion-content>
    <BottomTabs/>
  </ion-page>
</template>

<script>
import {useHouseStore} from "@/stores/HouseStore.js";
import TopToolBar from "@/components/nav/TopToolBar.vue";
import BottomTabs from "@/components/nav/BottomTabs.vue";
import { IonContent, IonPage, IonIcon, IonButton } from '@ionic/vue';
export default {
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonButton,
    TopToolBar,
    BottomTabs
  },
  data() {
    return {
      store: useHouseStore()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
