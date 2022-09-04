import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonItem, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import ProductCard from '../components/cards/ProductCard';
import SliderItem from '../components/slider/SliderItem';
import { Swiper, SwiperSlide} from 'swiper/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import 'swiper/css';
import './WishList.css';

export default function WishList() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar-icon-padding'>
          <IonButtons className="product-go-back-btn" slot="start">
              <IonBackButton className='back-button-icon' defaultHref="tab1" text="" color="tertiary"  />
          </IonButtons>
          <IonTitle>Your wish list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='wishlist-container'>
          <ProductCard type="wishlist"/>
          <ProductCard type="wishlist"/>
          <ProductCard type="wishlist"/>
          <ProductCard type="wishlist"/>
          <ProductCard type="wishlist"/>
          <ProductCard type="wishlist"/>
        </div>
        {/* SLIDER */}
        <h3 class="wishlist-slider-heading">Other products of user name</h3>
        <Swiper className='wishlist-slider'
            spaceBetween={16}
            slidesPerView={2.5}
            height={30}>
            
            <SwiperSlide>
              <SliderItem type="wishlist"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="wishlist"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="wishlist"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="wishlist"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="wishlist"/>
            </SwiperSlide>
          </Swiper>
          <IonButton className='btn btn-primary'>Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
