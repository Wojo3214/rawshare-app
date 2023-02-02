import { 
  IonContent,
  IonHeader, 
  IonImg, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  useIonToast,
  useIonLoading,
  IonItemGroup
} from '@ionic/react';
import { useState } from 'react';
import LoginForm from '../components/login-form/LoginForm';
import { supabase } from '../config/supabaseClient';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');

  const [showLoading, hideLoading] = useIonLoading();
  const [showToast ] = useIonToast();

  const handleLogin = async (e) => {
    console.log()
    e.preventDefault();
    await showLoading();
    try {
      await supabase.auth.signIn({ email });
      console.log("email is "+email);
      await showToast({ message: 'Check your email for the login link!' });
    } catch (e) {
      console.log("email is "+email);
      console.log(e.error_description || e.message)
      await showToast({ message: e.error_description || e.message , duration: 6000, cssClass: 'error-toast'});
    } finally {
      await hideLoading();
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="login-section">
          <IonHeader collapse="condense" className='ion-margin-top'>
            <IonImg src='assets/icon/logo-name.svg' className="logo"></IonImg>
            <IonToolbar>
              <IonTitle>Good to see you back!</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <LoginForm/> */}
          <form onSubmit={handleLogin} className='ion-padding login-form'>
            <IonItemGroup>
              <IonItem className="ion-no-margin ion-no-padding" lines="none">
                <IonLabel position="stacked"><b>Email</b></IonLabel>
                <IonInput 
                  className='form-input'
                  type='email'
                  //inputMode='email' 
                  //pattern='email' 
                  placeholder='Type your e-mail'
                  onIonChange={(e) => setEmail(e.detail.value ?? '')}
                />
              </IonItem>
              <IonItem className="ion-no-margin ion-no-padding" minlength="8" lines="none">
                <IonLabel position="stacked"><b>Password</b></IonLabel>
                <IonInput 
                  className='form-input'
                  type="password"
                  inputMode='password'
                  placeholder='Type your password'
                />
              </IonItem>
              <IonItem className="ion-no-margin ion-no-padding" lines="none">
                <a className="forgot-link" rel="noopener noreferrer" href="#">Forgot my password</a>
              </IonItem>
            </IonItemGroup>
            <p className='login-text'>If you are not a part of the RawShare yet, <a rel="noopener noreferrer" href="#"><br></br><b>create an account</b></a>.</p>
            <IonButton expand="block" className="ion-margin-top btn btn-primary btn-login" type="submit">Log in</IonButton>
        </form>
          {/* <IonList inset={true}>
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? '')}
                type="email"
              ></IonInput>
            </IonItem>
            <div className="ion-text-center">
              <IonButton type="submit" fill="clear">
                Login
              </IonButton>
            </div>
          </form>
        </IonList> */}
        </div>
      </IonContent>
    </IonPage>
  );
};
