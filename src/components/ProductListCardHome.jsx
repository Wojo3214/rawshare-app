import { IonCard, IonItem, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './ProductListCardHome.css';


export default function ProductListCardHome({type, title, address, seller, time, picture}) {
        return (
        <IonCard button>
            <IonItem className='product-list-card'>
                <div part="image"></div>
                <IonImg src={picture} className='product-card-img'></IonImg>
                <IonCardHeader className='product-list-header'>
                    <IonCardTitle className='product-list-title'>{title}</IonCardTitle>
                    <div className='flex-row'>
                        <IonIcon icon={timeOutline}/>
                        <p className="default-text" >{time}</p>
                    </div>
                    <div className='flex-row'>
                        <IonIcon icon={locationOutline} className="detail-icon"/>
                        <p className="details-text" >{address}</p>
                    </div>
                </IonCardHeader>
                <IonCardHeader className='product-list-details'>
                    <div className='product-list-user'>
                        <p className="details-text" >{seller}</p>
                        <IonIcon icon={starSharp} className="detail-icon-star"/>
                        <p className="details-text" >3.7</p>
                    </div>
                    <p className="details-text" >50m</p>
                </IonCardHeader>
            </IonItem>
        </IonCard>
        );
    
};