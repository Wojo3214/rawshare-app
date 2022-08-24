import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonTitle, IonToolbar, IonSearchbar, IonButton, IonIcon } from '@ionic/react';
import ProductListCardHome from '../components/../components/ProductListCardHome';
import { GoogleMap } from '@capacitor/google-maps';
import { useState, useEffect, useRef } from 'react';
import './Tab1.css';
import { funnelOutline, searchOutline } from 'ionicons/icons';

export default function Tab1() {
  const [searchText, setSearchText] = useState();

    const mapRef = useRef();
    let newMap= GoogleMap;
  
    async function createMap() {
      if (!mapRef.current) return;
  
      newMap = await GoogleMap.create({
        id: 'my-map',
        element: mapRef.current,
        apiKey: "AIzaSyDR_G69pa62v4gKDd2ti1GNWFJWRrdIzO8",
        config: {
          center: {
            lat: 56.15,
            lng: 10.19
          },
          zoom: 12
        }
      })}

  useEffect(
    () => {
      const segment = document.querySelector(".home-segment");
      segment.value = "map"
      handleSegmentChange();
      createMap();
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
      <IonHeader translucent collapse="condense">
        <IonToolbar className='toolbar-icon-padding home-toolbar'>
        </IonToolbar>
      </IonHeader>
      <IonContent  fullscreen>
        <IonHeader collapse="condense" translucent>
          <IonToolbar className='home-toolbar'>
            <IonSegment className='home-segment' onIonChange={e => handleSegmentChange(e)}>
              <IonSegmentButton className='home-segment-button' value="map">
                <IonLabel>Map</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='home-segment-button' value="list">
                <IonLabel>List</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          <IonToolbar className='home-heading'>
            <div class="button-bar">
              {/* <IonSearchbar className='home-searchbar' value={searchText} onIonChange={e => setSearchText(e.detail.value)} showCancelButton="never"></IonSearchbar> */}
              <IonButton className='ion-no-margin'>
                <IonIcon slot="icon-only" icon={searchOutline}/>
              </IonButton>
              <IonButton className='ion-no-margin'>
                <IonIcon slot="icon-only" icon={funnelOutline}/>
              </IonButton>
              <IonButton className='ion-no-margin'>Sort by: Far far awaydasd asdasdasas</IonButton>
              <IonButton className='ion-no-margin'>Category</IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className='segment-item home-map' id="map">
          <div className="component-wrapper">
            <capacitor-google-map ref={mapRef}></capacitor-google-map>
          </div>
        </div>
        <div className='segment-item home-list' id="list">
          <ProductListCardHome type="home-card" title="Banana" seller="Maddy" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
        <div className='segment-item home-list' id="list">
          <ProductListCardHome type="home-card" title="Strawberry" seller="Wojo" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
        <div className='segment-item home-list' id="list">
          <ProductListCardHome type="home-card" title="Lemon" seller="Kris" address="Haslegarsvej 24A" time="8:00 - 12:00" picture='https://images.pexels.com/photos/1021756/pexels-photo-1021756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
        <div className='segment-item home-list' id="list">
          <ProductListCardHome type="home-card" title="Mint" seller="Maddy" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
