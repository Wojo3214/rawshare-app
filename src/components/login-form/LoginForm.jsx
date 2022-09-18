import { 
  IonItem,
  IonItemGroup,
  IonLabel,
  IonInput,
  IonButton
 } from '@ionic/react';
import './LoginForm.css';

// interface ContainerProps {
//   name: string;
// }

export default function LoginForm() {
  return (
    <form className='ion-padding login-form'>
      <IonItemGroup>
        <IonItem className="ion-no-margin ion-no-padding" lines="none">
          <IonLabel position="stacked"><b>Email</b></IonLabel>
          <IonInput 
            className='form-input'
            type='email'
            inputMode='email' 
            pattern='email' 
            placeholder='Type your e-mail'
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
  );
};
