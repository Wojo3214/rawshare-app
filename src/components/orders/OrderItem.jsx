import { IonRow, IonCol, IonButton, IonAvatar, IonLabel, IonItem, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import { Clock, Calendar, ShoppingBag, MapPin } from 'react-feather';
import Status from "./Status";
import './OrderItem.css';


export default function OrderItem({type, status, address, seller, time, picture}) {
    return (
        <IonRow className='order-item'>
            <IonCol className="ion-no-padding" size="12">
                <IonRow>
                    <IonCol className="user-info" size="8">
                        <IonAvatar>
                            <img src="https://images.pexels.com/photos/3061415/pexels-photo-3061415.jpeg?auto=compress&cs=tinysrgb&w=800" />
                        </IonAvatar>
                        <IonLabel>Wojo</IonLabel>
                    </IonCol>
                    <IonCol size="4">
                        <Status status={status}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <span class="info-label">Order details</span> 
                    </IonCol>
                </IonRow>
                <IonRow className="info-container">
                    <IonCol size="12">
                        <IonRow>
                            <IonCol className="info-item" size="7">
                                <Calendar size={20}/>
                                <span class="order-details">15-03-2023</span> 
                            </IonCol>
                            <IonCol className="info-item" size="5">
                                <Clock size={20}/>
                                <span class="order-details">15:00</span> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-align-self-center info-item" size="7">
                                <MapPin size={20}/>
                                <span class="order-details">Haslegarsvej 98V</span> 
                            </IonCol>
                            <IonCol className="info-item" size="5">
                                <ShoppingBag size={20}/>
                                <span class="order-details">3 products</span> 
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="order-btn" size="12">
                        <IonButton className='btn btn-sm primary '>Pick-up order</IonButton>
                    </IonCol>
                </IonRow>
            </IonCol>
        </IonRow>
    );
    
};