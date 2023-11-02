<script>
import {IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter} from "@ionic/vue";

export default {
  name: "BaseLayout",
  components: {IonPage, IonContent, IonTitle, IonHeader, IonToolbar, IonFooter}

}
</script>

<template>
  <IonPage>
    <ion-header :translucent="true">
      <div class="top-decoration"></div>
      <div>
        <ion-toolbar class="toolbar--top" >
          <ion-img
              class="toolbar__logo"
              src="/logos/real-estate-care-logo.png"
              alt="Real Estate Logo" slot="start"/>
          <ion-buttons slot="secondary">
            <ion-button>
              <ion-img
                  class="toolbar__icon"
                  src="/icons/toolbar/toolbar-bell-icon.png"
                  alt="Bell Icon"/>
            </ion-button>
            <ion-button>
              <ion-img
                  class="toolbar__icon"
                  src="/icons/toolbar/toolbar-settings-icon.png"
                  alt="Settings Icon"/>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </div>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="toolbar--bottom">
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
.top-decoration {
  height: 1.1em;
  background-color:var(--ion-color-secondary);
}
.toolbar--top, .toolbar--bottom {
  --color: white;
}
.toolbar--top {
  --background: var(--ion-color-primary);
  .toolbar__logo {
    height: 2.3em;
    padding-left: .5em;
  }
  .toolbar__icon {
    height: 1.7em;
  }
}
.toolbar--bottom {
  --background: var(--ion-color-secondary);
}
</style>
