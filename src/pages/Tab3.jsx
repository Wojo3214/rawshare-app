import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonInput, IonList, IonTextarea, IonDatetime } from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from "swiper";
import './Tab3.css';
import 'swiper/css';



export default function Tab3() {
  const swiper = useSwiper();
  const [swiperRef, setSwiperRef] = useState(null);
  const [progressValue, setProgressValue] = useState(0.2);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className  + '">' + (index + 1) + "</div>";
    },
  };

  const countProgress = (e) => {
    const active = e.activeIndex;

    console.log(active);
    if (active == 0){
      document.querySelector(".home-progress").value="0.2";
    }
    else if (active == 1){
      document.querySelector(".home-progress").value="0.5";
    }
    else if (active == 2){
      document.querySelector(".home-progress").value="0.8";
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollY="false">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Add new product</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonProgressBar className='home-progress' color="primary" value={progressValue} determinate ></IonProgressBar><br />
          <div className="progress-names">
            <p className='slide-title'>Product Info</p>
            <p className='slide-title'>Upload image</p>
            <p className='slide-title' >Pick-up Info</p>
          </div>
          <Swiper scrollY
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            onSlideChange={(e) => countProgress(e)}
          >
            <SwiperSlide className='add-slide 0' id='0.2' value="lala">
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
                  <IonDatetime presentation="date" preferWheel={true}></IonDatetime>
                </IonItem>
              </IonList> 
            </SwiperSlide>
            <SwiperSlide className='add-slide 1' id='0.5' value="lalu">
              <p>Upload image</p>
            </SwiperSlide>
            <SwiperSlide className='add-slide 2' id='0.8' value="lali">
              <p>Pick-up Info</p>
            </SwiperSlide>
          </Swiper>
      </IonContent>
    </IonPage>
  );
};
