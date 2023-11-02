<template>
    <BaseLayout>
      <div class="tile-container">
        <TileButton name="Scheduled"/>
        <TileButton name="Completed"/>
        <TileButton name="Knowledge base"/>
        <TileButton name="Settings"/>
      </div>
    </BaseLayout>
</template>

<script>
import {useHouseStore} from "@/stores/HouseStore.js";
import BaseLayout from "@/components/BaseLayout.vue";
import TileButton from "@/components/home/TileButton.vue";
export default {
  name: "HomePage",
  components: {
    BaseLayout,
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
