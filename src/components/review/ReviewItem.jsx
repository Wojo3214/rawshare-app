import { IonIcon, IonItem, IonLabel, IonAvatar, IonRow, IonCol } from '@ionic/react';
import { starSharp } from 'ionicons/icons';
import './ReviewItem.css';

export default function ReviewItem({ type, title, text }) {
    return (
        <IonRow className='review-item ion-padding'>
            <IonCol size='12'>
                <IonRow className='ion-align-items-center'>
                    <IonCol size="10">
                        <IonItem className="review-user-info" lines='none'>
                            <IonAvatar slot="start" className="review-user-img">
                                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            </IonAvatar>
                            <IonLabel>
                                Jesse Pinkman
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                    <IonCol size="2" className='ion-justify-content-end'>
                        <ionItem lines="none">
                            <IonIcon icon={starSharp} className="detail-icon-star"/>
                            <span className="details-text" >3.7</span>
                        </ionItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus risus et suscipit pretium. Sed nec nibh id nibh ullamcorper ultricies.</p>
                    </IonCol>
                </IonRow>
            </IonCol>
        </IonRow>
    );
}