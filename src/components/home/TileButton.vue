<script>
import { IonIcon, IonButton, IonImg, IonLabel } from '@ionic/vue';
import homePage from "@/views/HomePage.vue";

export default {
  name: "TileButton",
  components: {
    IonIcon,
    IonButton,
    IonImg,
    IonLabel
  },
  data() {
    return {
      home: homePage
    }
  },
  props: {
    path: String,
    name: String,
    icon: String
  },
}
</script>

<template>
  <ion-button :root="home" :router-link="path" class="ion-text-wrap">
    <div class="custom-tile-button">
      <ion-img :src="icon" alt="tile icon"/>
      <ion-label>{{ name }}</ion-label>
    </div>
  </ion-button>
</template>

<style scoped lang="scss">
.custom-tile-button {
  display: flex;
  flex-flow: column;
  row-gap: 2em;
  justify-content: center;
  align-items: center;
}
ion-img {
  height: 6em;
}
ion-button {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1em;
  --background: --ion-background-color;
  --color: --ion-color-primary;
}
</style>
