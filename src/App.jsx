import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonBadge
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, restaurantOutline, addOutline, personOutline, notificationsOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

setupIonicReact();

export default function App(){
  return(
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <Tab4 />
            </Route>
            <Route path="/tab5">
              <Tab5 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" class='navbar'>
            <IonTabButton class='nav-icon' tab="tab1" href="/tab1">
              <IonIcon icon={homeOutline} />
            </IonTabButton>
            <IonTabButton class='nav-icon' tab="tab2" href="/tab2">
              <IonIcon icon={restaurantOutline} />
              <IonBadge>6</IonBadge>
            </IonTabButton>
            <IonTabButton class='add-product-tab' tab="tab3" href="/tab3">
              <IonIcon icon={addOutline} />
            </IonTabButton>
            <IonTabButton class='nav-icon' tab="tab4" href="/tab4">
              <IonIcon icon={personOutline} />
            </IonTabButton>
            <IonTabButton class='nav-icon' tab="tab5" href="/tab5">
              <IonIcon icon={notificationsOutline} />
              <IonBadge>3</IonBadge>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}