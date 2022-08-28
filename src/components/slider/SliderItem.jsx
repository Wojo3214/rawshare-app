import { IonCard, IonItem, IonCardHeader, IonCardTitle, IonBadge, IonIcon, IonLabel, IonButton, IonCardContent, IonImg, IonThumbnail  } from '@ionic/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './SliderItem.css';

export default function SliderItem({  }) {
    return (
      <IonCard className="slider-item">
        <div className='img-container'>
          <IonImg src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <IonCardHeader>
          <IonCardTitle className='product-name'>Food item name</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="distance-info">
          <IonIcon icon={locationOutline} slot="start" />
          1.2km
        </IonCardContent>
        {/* <IonItem className="user-info" lines='none'>
          <IonLabel>Food item name</IonLabel>
        </IonItem>
        <IonItem className="distance-info" lines='none'>
          <IonIcon icon={locationOutline} slot="start" />
          <IonLabel>1.2km</IonLabel>
        </IonItem> */}
      </IonCard>
    );
};