import { 
  IonModal, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonIcon,
  IonRow,
  IonCol,
  IonLabel, 
  IonItem, 
  IonButtons,
  IonButton, 
  IonSegment, 
  IonSegmentButton 
} from '@ionic/react';
import OrderItem from '../components/orders/OrderItem';
import ProductCard from '../components/cards/ProductCard';
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
  const modal = useRef(null);

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
            {/* SEGMENT BOOKED/SHARED */}
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
          <IonRow id='openDetailsModal'>
            <IonCol>OPEN MODAL</IonCol>
          </IonRow>
          <OrderItem status={"pending"}/>
          <OrderItem status={"accepted"} />
          <OrderItem status={"pending"}/>
        </div>
        <div className='segment-item' id="shared">
          <OrderItem status={"accepted"}/>
          <OrderItem status={"accepted"}/>
          <OrderItem status={"pending"}/>
        </div>
        <IonModal showBackdrop ref={modal} trigger="openDetailsModal">
          <IonContent className="details-modal">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton>Cancel</IonButton>
                </IonButtons>
                <IonTitle>Order details</IonTitle>
                <IonButtons slot="end">
                  <IonButton strong={true} onClick={() => modal.current?.dismiss()}>
                    Confirm
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
