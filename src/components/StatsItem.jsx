import { IonIcon, IonItem, IonLabel, IonAvatar, IonRow, IonCol, IonText } from '@ionic/react';
import { shareSocialOutline, cartOutline } from 'ionicons/icons';
import './StatsItem.css';

export default function StatsItem() {
    
        return (
            <IonRow className='stats-item ion-justify-content-center ion-align-items-center' lines="none">
                <IonCol size='2' className="stats-icon ion-align-self-center ion-justify-content-center">
                    <IonIcon icon={shareSocialOutline}/>
                </IonCol>
                <IonCol size='10' className='stats-info ion-align-self-center'>
                    <IonText color="primary"><p>5</p></IonText>
                    <IonText><p>Shared</p></IonText>
                </IonCol>
            </IonRow>
        );
    
}