import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonItem, IonButton, IonSegment, IonSegmentButton } from '@ionic/react';
import OrderItem from '../components/orders/OrderItem';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import { useState, useEffect, useRef } from 'react';
import './Tab2.css';

export default function Tab2() {
  useEffect(
    () => {
      const segment = document.querySelector(".products-segment");
      segment.value = "booked";
      handleSegmentChange();
    },
    [],
  );
  
  function handleSegmentChange(){
    const segmentValue = document.querySelector(".products-segment").value;
    const divs = document.querySelectorAll(".segment-item");
  
    for (const div of divs) {
      if (div.id == segmentValue){
        div.style.display="block";
      } else {
        div.style.display="none";
      }
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size='large'>Your Products</IonTitle>
          </IonToolbar>
          <IonToolbar className='products-toolbar'>
            {/* SEGMENT MAP/LIST */}
            <IonSegment className='products-segment' onIonChange={e => handleSegmentChange(e)}>
              <IonSegmentButton className='products-segment-button' value="booked">
                <IonLabel>Booked</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='products-segment-button' value="shared">
                <IonLabel>Shared</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          {/* BUTTON BAR*/}
          <IonToolbar className='booked-heading'>
            <div class="button-bar button-bar-orders">
              <IonButton className='ion-no-margin all-btn'>
                All
              </IonButton>
              <IonButton className='ion-no-margin bookes-btn'>
                Accepted
              </IonButton>
              <IonButton className='ion-no-margin shared-btn'>
                Pending
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className='segment-item' id="booked">
          <OrderItem status={"pending"}/>
          <OrderItem status={"accepted"}/>
          <OrderItem />
        </div>
        <div className='segment-item' id="shared">
          <OrderItem status={"accepted"}/>
          <OrderItem status={"accepted"}/>
          <OrderItem />
        </div>
      </IonContent>
    </IonPage>
  );
};
