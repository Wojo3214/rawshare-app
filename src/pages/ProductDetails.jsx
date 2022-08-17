import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonImg, IonFooter, IonBadge, IonIcon, IonItem, IonAvatar, IonLabel, IonText } from '@ionic/react';
import { calendarOutline, timeOutline, pinOutline, starSharp } from 'ionicons/icons';
import PickUpLocation from '../components/PickUpLocation';
import './ProductDetails.css';

export default function ProductDetails() {
  return (
    <IonPage>
      <IonHeader collapse="condense" className='ion-padding-start ion-padding-end'>
        <IonToolbar className='toolbar-top'>
          <IonButtons className="product-go-back-btn" slot="start">
            <IonBackButton defaultHref="home" text="" color="tertiary" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="product-details-container" fullscreen>
        <IonImg src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="ion-padding product-img"></IonImg>
        <div class="product-info ion-padding ion-margin">
          <div className='product-info-name'>
            <h3 className='product-title'>Banana</h3>
            <IonBadge className='product-info-amount' color="primary">2 stk</IonBadge>
          </div>
          <p>Perfect mint bought yesterday, I used only few leafs for my mohito, but the rests just waits to be used!</p>
          <div className='product-info-item-pick-up-details'>
            <IonIcon icon={calendarOutline} />
            <p><span><b>Expiration date</b> </span><span>19.12.2022</span></p>
          </div>
          <div className='product-info-item-pick-up-details'>
            <IonIcon icon={timeOutline} />
            <p><span><b>Preffered pick up time</b> </span><span>16:00 - 19:00</span></p>
          </div>
        </div>
        <IonItem class='owner-info ion-margin' color="dark" lines='none'>
          <IonAvatar slot="start">
            <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          </IonAvatar>
          <IonLabel className="ion-text-wrap">
            <h2>User name</h2>
            <div className='flex-row'>
                <IonIcon icon={starSharp} className="detail-icon-star"/>
                <p className="details-text" >3.7</p>
            </div>
          </IonLabel>
          <div className='owner-info-amount-container'>
            <p>More items</p>
            <IonBadge className='product-info-amount' color="primary">2</IonBadge>
          </div>
        </IonItem>
        <PickUpLocation address="Aarhus C 8210"/>
        <IonFooter className="ion-no-border book-btn-container ion-padding-horizontal" translucent>
          <IonToolbar color="none">
            <IonButtons slot="secondary">
              <IonButton expand="block" className="btn btn-primary">Book</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};
