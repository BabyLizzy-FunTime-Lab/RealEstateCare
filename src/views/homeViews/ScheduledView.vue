<script>
import {IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/vue";
import baseListLayout from "@/components/base/BaseListLayout.vue";

export default {
  name: "ScheduledView",
  components: {IonList, IonItem, IonListHeader,
    IonInput, IonLabel, IonButton, baseListLayout}
}
</script>

<template>
  <base-layout>
    <base-list-layout list-header-name="Scheduled Tasks">

    </base-list-layout>
    <ion-list>
      <ion-list-header color="primary">
        <ion-label><h2>Scheduled Tasks</h2></ion-label>
      </ion-list-header>
      <ion-accordion-group>
        <ion-accordion value="first" class="derp">
          <ion-item color="secondary" slot="header" style="margin-top:.5em; border-top:3px solid var(--ion-color-primary); border-left: 3px solid var(--ion-color-primary">
            <ion-label>Damage Inspection</ion-label>
          </ion-item>
          <ion-list slot="content">
            <div class="ion-padding" slot="content">First Content</div>
            <ion-item slot="content">
              <ion-label>Pokémon Yellow</ion-label>
            </ion-item>
            <ion-item slot="content">
              <ion-input label-placement="floating" type="text" >
                <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
              </ion-input>
            </ion-item>
          </ion-list>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header" color="light">
            <ion-label>Backlog Maintenance</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">Second Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header" color="light">
            <ion-label>Technical Installation Inspection</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">Third Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header" color="light">
            <ion-label>Modifications</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">Third Content</div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-list>

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
