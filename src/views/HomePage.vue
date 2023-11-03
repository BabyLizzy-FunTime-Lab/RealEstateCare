<template>
    <base-layout>
      <div class="tile-container">
        <TileButton name="Scheduled"/>
        <TileButton name="Completed"/>
        <TileButton name="Knowledge base"/>
        <TileButton name="Settings"/>
      </div>
    </base-layout>
</template>

<script>
import {useHouseStore} from "@/stores/HouseStore.js";
import TileButton from "@/components/home/TileButton.vue";
export default {
  name: "HomePage",
  components: {
    TileButton
  },
  data() {
    return {
      store: useHouseStore()
    }
  }
}
</script>

<style scoped lang="scss">
.tile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
}
</style>
