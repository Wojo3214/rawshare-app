import { IonContent, IonHeader, IonItemGroup, IonPage, IonTitle, IonToolbar, IonIcon,IonButtons, IonBackButton, IonButton, IonImg, IonRow, IonCol } from '@ionic/react';
import PickUpLocation from '../components/location/PickUpLocation';
import ProductListCardProfile from '../components/cards/ProductListCardProfile';
import ReviewItem from '../components/review/ReviewItem';
import StatsItem from '../components/statsItem/StatsItem';
import { starSharp, personCircle } from 'ionicons/icons';
import './Profile.css';

export default function Profile() {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color='primary'>
          <IonButtons className="product-go-back-btn" slot="start" color='primary'>
            <IonBackButton defaultHref="home" text="" color="tertiary" />
          </IonButtons>
          <IonTitle>User name</IonTitle>
          {/* <IonButtons className="product-go-back-btn" slot="start">
            <IonButton fill="solid">
              <IonIcon slot="start" icon={personCircle} />
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" class='profile-header' color="secondary">
       
        <IonToolbar color='primary'> 
            <IonTitle size="large">Lucyfer</IonTitle>
          </IonToolbar>
          <IonImg src="https://cdn1.naekranie.pl/media/cache/article-cover/2021/10/Lucifer%20Morningstar_61696e5674054.jpeg" />
        </IonHeader>
        <div className='stats-container'>
          <StatsItem type="shared" shared={32}></StatsItem>
          <StatsItem type="collected" collected={2+"/"+10}></StatsItem>

        </div>
        <div class="food-container ion-margin-horizontal">
          <h3 className="ion-margin-bottom">User shares</h3>
          <ProductListCardProfile/>
          <ProductListCardProfile/>
          <ProductListCardProfile/>
        </div>
        <PickUpLocation address="Aarhus V 7329"/>
        <div class="review-container ion-margin-horizontal">
          <IonRow>
            <IonCol className='ion-justify-content-start ion-align-items-center' size="12">
              <div className='review-header'>
                <h3>Reviews</h3>
                <ionItem lines="none">
                    <IonIcon icon={starSharp} className="detail-icon-star"/>
                    <span className="details-text" >3.7</span>
                    <span className="details-text" >(30)</span>
                </ionItem>
              </div>
              
            </IonCol>
          </IonRow>
          <IonItemGroup className='review-box'>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </IonItemGroup>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
