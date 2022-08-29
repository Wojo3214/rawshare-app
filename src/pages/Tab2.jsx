import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonItem } from '@ionic/react';
import OrderItem from '../components/orders/OrderItem';
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
        <OrderItem status={"pending"}/>
        <OrderItem status={"accepted"}/>
        <OrderItem />
      </IonContent>
    </IonPage>
  );
};
