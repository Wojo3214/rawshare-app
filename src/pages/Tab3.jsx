import React, { useRef, useState } from 'react';
import Moment from 'moment';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonInput, IonList, IonTextarea, IonDatetime, IonSelect, IonSelectOption, IonBackButton, IonButtons, IonFooter, IonButton, IonModal, IonDatetimeButton, IonText, useIonPicker } from '@ionic/react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import './Tab3.css';
import 'swiper/css';



export default function Tab3() {
  const [progressValue, setProgressValue] = useState(0.2);
  const [activeIndex, serActiveIndex] = useState(0);
  const [country, setCountry] = useState();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className  + '">' + (index + 1) + "</div>";
    },
  };

  const countProgress = (e) => {
    const active = e.activeIndex;
    serActiveIndex(active);

    if (active == 0){
      document.querySelector(".home-progress").value="0.2";
      singleButton();
    }
    else if (active == 1){
      document.querySelector(".home-progress").value="0.5";
    }
    else if (active == 2){
      document.querySelector(".home-progress").value="0.8";
    }
  }

  const [present] = useIonPicker();
  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'countries',
          options: [
            {
              text: 'Denmark',
              value: 'Denmark',
            },
            {
              text: 'Norway',
              value: 'Norway',
            },
            {
              text: 'Poland',
              value: 'Poland',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Select',
          handler: (value) => {
            setCountry(value.countries.value);
          },
        },
      ],
    });
  };

  function singleButton(){
    return (
      <IonFooter className="ion-no-border book-btn-container ion-padding-horizontal" translucent>
        <IonToolbar color="none" className='add-product-footer'>
          <IonButtons slot="secondary">
            <IonButton expand="block" className="btn btn-primary">Next</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    )
  }

  function dateHandler(e){
    setDateValue(Moment(e.detail.value).format("DD-MM-YYYY"));
    //setDateValue(modifyDateFormat(e.detail.value));
  }

  // function modifyDateFormat(date){
  //   Moment(date).format("DD/MM/YYYY");
  //   return date;
  // }

  const [dateValue, setDateValue] = useState('');
  console.log("expiration date", dateValue);
  return (
    <IonPage>
      <IonHeader collapse="condense">
          <IonToolbar className='toolbar-icon-padding'>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar className='toolbar-icon-padding'>
            <IonButtons className="product-go-back-btn" slot="start">
              <IonBackButton className='back-button-icon' defaultHref="tab1" text="" color="tertiary"  />
            </IonButtons>
            <IonTitle>Add new product</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonProgressBar className='home-progress' color="primary" value={progressValue} determinate ></IonProgressBar><br />
          <div className="progress-names">
            <p className='slide-title'>Product Info</p>
            <p className='slide-title'>Upload image</p>
            <p className='slide-title' >Pick-up Info</p>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            onSlideChange={(e) => countProgress(e)}
          >
            {/*PRODUCT INFO SLIDE*/}
            <SwiperSlide className='add-slide 0' id='0.2' value="lala">
              <IonList className='form-list'>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Product name</IonLabel>
                  <IonInput className='form-input' placeholder="E.g. Apple"></IonInput>
                </IonItem>
                <IonItem lines='none' className='add-list-item'> 
                  <IonLabel position="stacked" className='form-label'>Food Type</IonLabel>
                  <IonSelect placeholder="Food type" interface="action-sheet" className='form-select' name='food-type'>
                    <IonSelectOption value="fruit">Fruit</IonSelectOption>
                    <IonSelectOption value="vegetable">Vegetable</IonSelectOption>
                    <IonSelectOption value="pre-cooked">Pre-cooked</IonSelectOption>
                </IonSelect>
                </IonItem>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Description</IonLabel>
                  <IonTextarea className='form-input'></IonTextarea>
                </IonItem>
                <div className='product-amount-div'>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>Amount</IonLabel>
                    <IonInput className='form-input' placeholder="E.g. 10"></IonInput>
                  </IonItem>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>Unit</IonLabel>
                    <IonSelect placeholder="kg" interface="action-sheet" className='form-select' name='unit'>
                      <IonSelectOption value="g">grams</IonSelectOption>
                      <IonSelectOption value="kg">kilograms</IonSelectOption>
                      <IonSelectOption value="ml">militers</IonSelectOption>
                      <IonSelectOption value="l">liters</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </div>
                {/* <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                <IonModal keepContentsMounted={true} initialBreakpoint={0.40}>
                  <IonDatetime id="datetime" preferWheel></IonDatetime>
                </IonModal> */}
                  
                {/* <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className="form-label">Expiration date</IonLabel>
                  <IonButton expand="block" className="form-label date-button" id="open-modal" >Pick up date</IonButton>
                  <IonModal animated initialBreakpoint={0.40}  trigger="open-modal" className='date-container'>
                    <IonContent className='date-container ion-padding'>
                      <IonDatetime cover className='date-modal' id="datetime" presentation='date' preferWheel showDefaultButtons></IonDatetime>
                    </IonContent>
                  </IonModal>
                </IonItem> */}
                {/* <IonDatetime cover className='date-modal' id="datetime" presentation='date' preferWheel showDefaultButtons onIonChange={(e) => setDateValue(e.detail.value)}></IonDatetime> */}
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className="form-label">Expiration date</IonLabel>
                  <IonText className="form-input date-button" id="open-modal" >{dateValue ? dateValue : "Choose..."}</IonText>
                  <IonModal canDismiss animated initialBreakpoint={0.40}  trigger="open-modal" className='date-container'>
                    <IonContent className='date-container ion-padding'>
                      <IonDatetime cover className='date-modal' id="datetime" presentation='date' preferWheel showDefaultButtons onIonChange={dateHandler}></IonDatetime>
                    </IonContent>
                  </IonModal>
                </IonItem>
              </IonList> 
            </SwiperSlide>
            {/*UPLOAD IMAGE SLIDE*/}
            <SwiperSlide className='add-slide 1' id='0.5' value="lalu">
              <p>Upload image</p>
            </SwiperSlide>

            {/*PICK UP ADRRESS SLIDE*/}
            <SwiperSlide className='add-slide 2' id='0.8' value="lali">
              <IonList className='form-list'>
                <div className='product-amount-div'>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>From</IonLabel>
                    <IonInput className='form-input' placeholder="17:00"></IonInput>
                    {/* <IonDatetime presentation="time"></IonDatetime> */}
                  </IonItem>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>To</IonLabel>
                    <IonInput className='form-input' placeholder="20:00"></IonInput>
                    {/* <IonDatetime presentation="time"></IonDatetime> */}
                  </IonItem>
                </div>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Street name</IonLabel>
                  <IonInput className='form-input' placeholder="E.g. Holmstrup"></IonInput>
                </IonItem>
                <div className='product-amount-div'>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>Building num</IonLabel>
                    <IonInput className='form-input' placeholder="E.g. 12"></IonInput>
                  </IonItem>
                  <IonItem lines='none' className='add-list-item'>
                    <IonLabel position="stacked" className='form-label'>Flat num</IonLabel>
                    <IonInput className='form-input' placeholder="E.g. kld. 10"></IonInput>
                  </IonItem>
                </div>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>Postal code</IonLabel>
                  <IonInput className='form-input' inputmode="numeric" minlength={4} maxlegth={4} placeholder="E.g. 8210"></IonInput>
                </IonItem>
                <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className='form-label'>City</IonLabel>
                  <IonInput className='form-input' placeholder="E.g. Aarhus"></IonInput>
                </IonItem>
                <IonItem lines='none' className='add-list-item'> 
                  <IonLabel position="stacked" className='form-label'>Country</IonLabel>
                  <IonInput className='form-input' placeholder="E.g. Denmark" onClick={openPicker}>{country}</IonInput>

                  {/* <IonSelect placeholder="Food type" interface="action-sheet" className='form-select' name='food-type'>
                    <IonSelectOption value="fruit">Denmark</IonSelectOption>
                    <IonSelectOption value="vegetable">Norway</IonSelectOption>
                    <IonSelectOption value="pre-cooked">Poland</IonSelectOption>
                    </IonSelect> */}
                </IonItem>
                
                {/* <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                <IonModal keepContentsMounted={true} initialBreakpoint={0.40}>
                  <IonDatetime id="datetime" preferWheel></IonDatetime>
                </IonModal> */}
                  
                {/* <IonItem lines='none' className='add-list-item'>
                  <IonLabel position="stacked" className="form-label">Expiration date</IonLabel>
                  <IonButton expand="block" className="form-label date-button" id="open-modal" >Pick up date</IonButton>
                  <IonModal animated initialBreakpoint={0.40}  trigger="open-modal" className='date-container'>
                    <IonContent className='date-container ion-padding'>
                      <IonDatetime cover className='date-modal' id="datetime" presentation='date' preferWheel showDefaultButtons></IonDatetime>
                    </IonContent>
                  </IonModal>
                </IonItem> */}
                {/* <IonDatetime cover className='date-modal' id="datetime" presentation='date' preferWheel showDefaultButtons onIonChange={(e) => setDateValue(e.detail.value)}></IonDatetime> */}
              </IonList>
            </SwiperSlide>
          </Swiper>
          { activeIndex == 0 ?
           <IonFooter className="ion-no-border book-btn-container ion-padding-horizontal" translucent>
            <IonToolbar color="none" className='add-product-footer'>
              <IonButtons slot="secondary">
                <IonButton expand="block" className="btn btn-primary">Next</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonFooter> 
          : activeIndex == 1 ? 
          <IonFooter className="ion-no-border book-btn-container ion-padding-horizontal" translucent>
            <IonToolbar color="none" className='add-product-footer'>
              <IonButtons slot="secondary">
                <IonButton expand="block" className="btn">Back</IonButton>
                <IonButton expand="block" className="btn btn-primary">Next</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonFooter> 
          : 
          <IonFooter className="ion-no-border book-btn-container ion-padding-horizontal" translucent>
            <IonToolbar color="none" className='add-product-footer'>
              <IonButtons slot="secondary">
                <IonButton expand="block" className="btn">Back</IonButton>
                <IonButton expand="block" className="btn btn-primary">Add Item</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonFooter>}
      </IonContent>
    </IonPage>
  );
};
