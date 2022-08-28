import { IonIcon } from '@ionic/react';
import { pinOutline } from 'ionicons/icons';
import './PickUpLocation.css';

export default function PickUpLocation({address}) {
    return (
      <div className='pick-up-address'>
        <div className='pick-up-address-header'>
          <h3>Pick-up location</h3>
          <p>
            <IonIcon icon={pinOutline} />
            <span>{address}</span>
          </p>
        </div>
        <div class="map"></div>
      </div>
    );
};