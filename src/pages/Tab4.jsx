import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProductCard from '../components/ProductCard';
import './Tab4.css';

export default function Tab4() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className='profile-header'>
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProductCard type="profile"/>
        <ProductCard type="profile"/>
        <ProductCard type="profile"/>
        <ProductCard type="profile"/>
        <ProductCard type="profile"/>
      </IonContent>
    </IonPage>
  );
};
