<script>
export default {
  name: "BottomTabs"
}
</script>

<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="active-task">
<!--      <ion-icon name="play-circle"></ion-icon>-->
      Active task
    </ion-tab-button>
    <ion-tab-button tab="search">
<!--      <ion-icon name="radio"></ion-icon>-->
      Search
    </ion-tab-button>
    <ion-tab-button tab="information">
<!--      <ion-icon name="library"></ion-icon>-->
      Information
    </ion-tab-button>
  </ion-tab-bar>
</template>

<style scoped lang="scss">

</style>
