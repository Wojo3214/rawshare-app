import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonSlides, IonSlide, IonItem, IonLabel, IonInput, IonList, IonTextarea } from '@ionic/react';
import './Tab3.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";
import 'swiper/css/pagination';

export default function Tab3() {
  const swiper = useSwiper();
  const [swiperRef, setSwiperRef] = useState(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className  + '">' + (index + 1) + "</div>";
    },
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Add new product</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonProgressBar color="primary" determinate value={0.3}></IonProgressBar><br />
          <div class="progress-names">
            <p class='slide-title'>Product Info</p>
            <p class='slide-title'>Upload image</p>
            <p class='slide-title' >Pick-up Info</p>
          </div>
          <Swiper 
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
          >
            <SwiperSlide className='add-slide'>
              <IonList className='form-list'>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Product name</IonLabel>
                  <IonInput className='form-input' placeholder="E.g. Apple"></IonInput>
                </IonItem>
                <IonItem lines='none' className='add-list-item'> 
                  <IonLabel position="stacked" className='form-label'>Food Type</IonLabel>
                  <IonInput className='form-input' placeholder="Vegan"></IonInput>
                </IonItem>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Description</IonLabel>
                  <IonTextarea className='form-input'></IonTextarea>
                </IonItem>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Expiration date</IonLabel>
                  <ion-datetime preferWheel="true" size="cover" first-day-of-week="1" presentation="date"></ion-datetime>
                </IonItem>
              </IonList> 
            </SwiperSlide>
            <SwiperSlide className='add-slide'>
              <p>Upload image</p>
            </SwiperSlide>
            <SwiperSlide className='add-slide'>
              <p>Pick-up Info</p>
            </SwiperSlide>
          </Swiper>
      </IonContent>
    </IonPage>
  );
};
