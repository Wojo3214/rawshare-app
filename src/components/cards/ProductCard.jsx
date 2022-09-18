import { IonCard, IonItem, IonCardHeader, IonCardTitle, IonIcon, IonLabel, IonButton, IonChip, IonImg } from '@ionic/react';
import { Trash2 } from 'react-feather';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import './ProductCard.css';


export default function ProductCard({type, title, address, seller, time, picture}) {
    if(type=="home"){
        return (
            <IonCard button>
                <IonItem className='product-list-card' lines='none'>
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
    } else if(type=="profile"){
        return(
            <IonCard button>
                <IonItem className='product-profile-card' lines='none'>
                    <div part="image"></div>
                    <IonImg src='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='product-card-img'></IonImg>
                    <IonCardHeader className='product-profile-header'>
                        <IonCardTitle className='product-profile-title'>Banana</IonCardTitle>
                        <div className='flex-row'>
                            <IonIcon icon={timeOutline}/>
                            <p className="default-text" >13:00 - 15:00</p>
                        </div>
                        <div className='flex-row'>
                            <IonIcon icon={locationOutline} className="detail-icon"/>
                            <p className="details-text" >Haslegarsvej 24A</p>
                        </div>
                    </IonCardHeader>
                    <IonCardHeader className='product-profile-details'>
                        <IonChip className='amount-label'>
                            <IonLabel>2 stk</IonLabel>
                        </IonChip>
                    </IonCardHeader>
                </IonItem>
            </IonCard>
        );
    } else if(type=="wishlist"){
        return(
            <IonCard button>
                <IonItem className='wishlist-card' lines='none'>
                    <div part="image">
                        <IonImg src='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='wishlist-card-img'></IonImg>
                    </div>
                    <IonCardHeader className='wishlist-header'>
                        <IonCardTitle className='wishlist-title'>Banana</IonCardTitle>
                        <div className='flex-row'>
                            <p className="default-text" >3kg</p>
                        </div>
                    </IonCardHeader>
                    <Trash2 className="wishlist-delete-btn"size={24}/>
                    {/* <IonCardHeader className='product-list-details'>
                        <IonButton slot="icon-only">
                            
                        </IonButton>
                    </IonCardHeader> */}
                </IonItem>
            </IonCard>
        );
    }
    
    
};