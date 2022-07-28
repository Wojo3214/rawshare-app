import { 
  IonItem,
  IonItemGroup,
  IonLabel,
  IonInput,
  IonButton
 } from '@ionic/react';
import './NotificationItem.css';

// interface ContainerProps {
//   name: string;
// }

export default function NotificationItem() {
  return (
    <IonItem lines="none">
      <IonLabel position="stacked"><b>Email</b></IonLabel>
    </IonItem>
  );
};
