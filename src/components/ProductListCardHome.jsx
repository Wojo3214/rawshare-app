import { IonCard, IonItem, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './ProductListCardHome.css';


export default function ProductListCardHome({  }) {
    return (
      <IonCard button>
        <IonItem className='product-list-card'>
            <div part="image" class></div>
            <IonImg src='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='product-card-img'></IonImg>
            <IonCardHeader className='product-list-header'>
                <IonCardTitle className='product-list-title'>Banana</IonCardTitle>
                <div className='flex-row'>
                    <IonIcon icon={timeOutline}/>
                    <p className="default-text" >13:00 - 15:00</p>
                </div>
                <div className='flex-row'>
                    <IonIcon icon={locationOutline} className="detail-icon"/>
                    <p className="details-text" >Haslegarsvej 24A</p>
                </div>
            </IonCardHeader>
            <IonCardHeader className='product-list-details'>
                <div className='product-list-user'>
                    <p className="details-text" >Maddy</p>
                    <IonIcon icon={starSharp} className="detail-icon-star"/>
                    <p className="details-text" >3.7</p>
                </div>
                <p className="details-text" >50m</p>
            </IonCardHeader>
        </IonItem>
      </IonCard>
    );
};