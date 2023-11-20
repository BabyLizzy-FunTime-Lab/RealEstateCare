<script>
export default {
  name: "BaseAccordionLayout",
  props: {
    headerName: String,
    accordionValue: String
  }
}
</script>

<template>
  <ion-accordion :value="accordionValue">
    <ion-item slot="header" color="light">
      <ion-label>{{ headerName }}</ion-label>
    </ion-item>
    <slot></slot>
  </ion-accordion>
</template>

<style scoped lang="scss">
ion-item {
  margin-top: .5em;
  border-top: 2px solid var(--ion-color-secondary);
  border-left: 2px solid var(--ion-color-secondary);
}
</style>
