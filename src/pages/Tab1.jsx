import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProductListCardHome from '../components/../components/ProductListCardHome';
import MessageBox from '../components/MessageBox';
import './Tab1.css';

export default function Tab1() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ProductListCardHome/>
        <MessageBox type="informative" title="Twoja stara" text="Spoko MessageBox"/>
        <MessageBox type="warning" title="Twoja stara" text="Spoko MessageBox jdshkdjhasdjhas dasjhdkajshdkjashsdk"/>
        <MessageBox type="error" title="TwOj stary" text="SBkahdoaishfoaushgfoiafhaoif"/>
        <MessageBox type="success" title="Twoja stara" text="Spoko MessageBox"/>
      </IonContent>
    </IonPage>
  );
};
