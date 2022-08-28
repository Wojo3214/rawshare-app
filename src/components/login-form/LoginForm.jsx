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
        <IonItem lines="none">
          <IonLabel position="stacked"><b>Email</b></IonLabel>
          <IonInput 
            className='input'
            type='email'
            inputMode='email' 
            pattern='email' 
            placeholder='Type your e-mail'
          />
        </IonItem>
        <IonItem lines="none">
          <IonLabel position="stacked"><b>Password</b></IonLabel>
          <IonInput 
            className="input"
            type="password"
            inputMode='password'
            placeholder='Type your password'
          />
        </IonItem>
        <IonItem lines="none">
          <a color="danger" rel="noopener noreferrer" href="#">Forgot password?</a>
        </IonItem>
      </IonItemGroup>
      <p className='login-text'>If you are not a part of the RawShare yet, <a color="danger" rel="noopener noreferrer" href="#"><b>create an account</b></a>.</p>
      <IonButton expand="block" className="ion-margin-top btn btn-primary" type="submit">Log in</IonButton>
    </form>
  );
};
