<script>
import {IonPage, IonButtons, IonImg, IonLabel, IonButton, IonIcon,
  IonContent, IonHeader, IonTitle, IonToolbar, IonFooter} from "@ionic/vue";
import { build, search, alertCircle } from 'ionicons/icons';
import BottomToolbarButton from "@/components/toolbar/BottomToolbarButton.vue";

export default {
  name: "BaseLayout",
  components: {
    BottomToolbarButton, IonPage, IonButtons, IonImg, IonLabel,
    IonButton, IonIcon, IonContent, IonTitle, IonHeader, IonToolbar, IonFooter},
  setup() {
    return { alertCircle, build, search };
  },
  methods: {
    print(icon) {
      console.log(icon);
    }
  }
}
</script>

<template>
  <IonPage>
    <ion-header :translucent="true">
      <div class="top-decoration"></div>
      <div>
        <ion-toolbar class="toolbar--top" >
          <ion-img
              router-link="/"
              class="toolbar__logo"
              src="/logos/real-estate-care-logo.png"
              alt="Real Estate Logo" slot="start"/>
          <ion-buttons slot="secondary">
            <ion-button router-link="/search">
              <ion-img
                  class="toolbar__icon"
                  src="/icons/toolbar/toolbar-bell-icon.png"
                  alt="Bell Icon"/>
            </ion-button>
            <ion-button router-link="/settings">
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
        <ion-buttons>
          <bottom-toolbar-button label="Active Task" :icon="build" path="/active-task"/>
          <bottom-toolbar-button label="Search" :icon="search" path="/search"/>
          <bottom-toolbar-button label="Information" :icon="alertCircle" path="/information"/>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
.top-decoration {
  height: 1.1em;
  background-color: var(--ion-color-secondary);
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
  ion-buttons {
    justify-content: space-between;
  }
}
</style>
