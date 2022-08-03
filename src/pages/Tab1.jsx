import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ProductListCardHome from '../components/../components/ProductListCardHome';
import MessageBox from '../components/MessageBox';
import './Tab1.css';
import { useState, useEffect } from 'react';

export default function Tab1() {
  const [searchText, setSearchText] = useState();

  useEffect(
    () => {
      const segment = document.querySelector(".home-segment");
      segment.value = "map"
      handleSegmentChange();
    },
    [],
  );

  function handleSegmentChange(){
    const segmentValue = document.querySelector(".home-segment").value;
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
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonSegment className='home-segment' onIonChange={e => handleSegmentChange(e)}>
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
        <MessageBox type="informative" title="Information" text="This is an informative message box."/>
        <MessageBox type="warning" title="Warning" text="This is a warning message box."/>
        <MessageBox type="error" title="Error" text="This is an error message box."/>
        <MessageBox type="success" title="Great success" text="This is a success message box."/>
        <div className='segment-item home-map' id="map">
          <p>Map placeholder</p>
        </div>
        <div className='segment-item home-list' id="list">
          <ProductListCardHome type="home-card" title="Banana" address="Haslegarsvej 24A"/>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
