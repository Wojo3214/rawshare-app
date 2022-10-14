import { IonCard, IonItem, IonCardHeader, IonCardTitle, IonBadge } from '@ionic/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './NotificationItem.css';

export default function NotificationItem({  }) {
    return (
      <IonCard className='notification-card' button>
        <IonItem className='notification-item' lines='none'>
            <IonBadge slot="start" className='notification-badge'>!</IonBadge>
            <IonCardHeader className='notification-header'>
                <IonCardTitle className='product-list-title'>New Order</IonCardTitle>
                <div className='flex-row'>
                    <p className="default-text" ><span class='account-name'>Wojo</span> ordered some amazing stuff from you!</p>
                </div>
            </IonCardHeader>
        </IonItem>
      </IonCard>
    );
};