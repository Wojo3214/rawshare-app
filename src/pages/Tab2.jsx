import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonItem } from '@ionic/react';
import SliderItem from '../components/slider/SliderItem';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './Tab2.css';

export default function Tab2() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Orders</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SliderItem />
      </IonContent>
    </IonPage>
  );
};
