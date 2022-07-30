import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Notification from '../components/Notification';
import './Tab5.css';

export default function Tab5() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notification/>
      </IonContent>
    </IonPage>
  );
};
