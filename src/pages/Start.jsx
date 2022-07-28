import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Start.css';

export default function Start() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="start-section">
          <IonHeader collapse="condense" className='ion-margin-top'>
            <IonImg src='assets/icon/logo-name.svg' class="logo-xl"></IonImg>
            <IonToolbar color="transparent">
              <IonTitle className="start-title" color="tertiary">Save food with us. Share it with others!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className='buttons-group ion-padding'>
            <IonButton expand="block" className="ion-margin-top btn btn-primary--negative" type="button">Log in</IonButton>
            <IonButton expand="block" className="ion-margin-top btn btn-secondary--negative" fill="outline" type="button">Sign up</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
