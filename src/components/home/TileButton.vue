<script>
import { IonIcon, IonButton } from '@ionic/vue';

export default {
  name: "TileButton",
  components: {
    IonIcon,
    IonButton,
  },
  props: {
    path: String,
    name: String,
    icon: String
  },
  methods: {
    showPath(path) {
      console.log(path);
    }
  }
}
</script>

<template>
  <ion-button @click="showPath">
    {{ icon }}
    {{ name }}
  </ion-button>
</template>

<style scoped lang="scss">

</style>
