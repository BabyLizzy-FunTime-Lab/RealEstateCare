<script>
export default {
  name: "ScheduledView"
}
</script>

<template>
  <base-layout>
    <h2>Scheduled Tasks</h2>
    <p>We'll use v-if to show the individual forms onclick. The forms are made as components.</p>
    <p>Each form get it's own send button and gets automaticaly tagged with the id of the logged in inspector.</p>
    <p>the forms are dropdowns. All can be open and closed at anytime so teh user may copy paste if needed.</p>
    <p>The location input is bound to variable to prevent typos.</p>
    <p>Data is structured as a json array with 4 categories. One category for each type of form.</p>
    <p>Each form should have a unique id, the client location, send date and the inspector id.</p>
  </base-layout>
</template>

<style scoped lang="scss">

</style>
