import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ProductListCardHome from '../components/../components/ProductListCardHome';
import MessageBox from '../components/MessageBox';
import './Tab1.css';
import React, { useState, useRef } from 'react';

export default function Tab1() {
  const [oldValue, setOldValue] = useState();
  const [searchText, setSearchText] = useState();
  console.log(searchText);
  
  const handleSegmentChange = (e) => {
    const value = e.detail.value;
    setOldValue(e.detail.value);

    const div = document.querySelector(`#${value}`).id;
    const oldDiv = document.querySelector(`#${oldValue}`).id;

    if (div == value)   {
      document.querySelector(`#${value}`).style.display = "block";
    }
    
    if (oldDiv == oldValue) {
      document.querySelector(`#${oldValue}`).style.display = "none";
    }
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonSegment defaultValue="list" className='home-segment' onIonChange={e => handleSegmentChange(e)}>
              <IonSegmentButton className='home-segment-button' value="map">
                <IonLabel>Map</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='home-segment-button' value="list">
                <IonLabel>List</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar className='home-searchbar' value={searchText} onIonChange={e => setSearchText(e.detail.value)} showCancelButton="never"></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <MessageBox type="informative" title="Twoja stara" text="Spoko MessageBox"/>
        <MessageBox type="warning" title="Twoja stara" text="Spoko MessageBox jdshkdjhasdjhas dasjhdkajshdkjashsdk"/>
        <MessageBox type="error" title="TwOj stary" text="SBkahdoaishfoaushgfoiafhaoif"/>
        <MessageBox type="success" title="Twoja stara" text="Spoko MessageBox"/>
        <div className='segment-item' id="map">
          <p>Map placeholder</p>
        </div>
        <div className='segment-item' id="list">
          <ProductListCardHome type="home-card" title="Banana" address="Haslegarsvej 24A"/>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
