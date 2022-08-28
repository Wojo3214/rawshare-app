import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginForm from '../components/login-form/LoginForm';
import './Login.css';

export default function Login() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="login-section">
          <IonHeader collapse="condense" className='ion-margin-top'>
            <IonImg src='assets/icon/logo-name.svg' class="logo"></IonImg>
            <IonToolbar>
              <IonTitle>Good to see you back!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <LoginForm/>
        </div>
      </IonContent>
    </IonPage>
  );
};
