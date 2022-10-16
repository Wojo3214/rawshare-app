import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonSegment, 
  IonSegmentButton, 
  IonLabel, 
  IonCheckbox, 
  IonToolbar, 
  IonSearchbar, 
  IonButton, 
  IonIcon, 
  IonModal, 
  IonItem, 
  useIonPicker, 
  IonRange, 
  IonButtons 
} from '@ionic/react';
import { closeOutline, funnelOutline, searchOutline } from 'ionicons/icons';
import ProductCard from '../components/cards/ProductCard';
import SliderItem from '../components/slider/SliderItem';
import { GoogleMap } from '@capacitor/google-maps';
import { Swiper, SwiperSlide} from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import { useIonViewDidEnter } from '@ionic/react';
import './Tab1.css';
import 'swiper/css';


export default function Tab1() {
  const [searchText, setSearchText] = useState();
  const [sortValue, setSortValue] = useState("Nearest");
  const [distance, setDistance] = useState(1);
  const [present] = useIonPicker();

  //GOOGLE MAPS
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
        zoom: 12,
        disableDefaultUI: true,
      }
    })

    const markerImage = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    };

    // Add a marker to the map
    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 56.15,
        lng: 10.19
      },
      iconUrl: markerImage,
    });
  }

  useEffect(
    () => {
      const segment = document.querySelector(".home-segment");
      segment.value = "map";
      handleSegmentChange();
      createMap();
      },[],
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

  const modal = useRef(null);
  const modal2 = useRef(null);

  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'sorts',
          options: [
            {
              text: 'Nearest',
              value: 'nearest',
            },
            {
              text: 'User Ratings',
              value: 'user-ratings',
            }
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Sort',
          handler: (selected) => {
            setSortValue(selected.sorts.text)
          },
        },
      ],
    });
  };

  
  return (
    <IonPage>
      {/* <IonHeader translucent collapse="condense">
        <IonToolbar className='toolbar-icon-padding home-toolbar'>
        </IonToolbar>
      </IonHeader> */}
      <IonContent  fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar className='home-toolbar'>
            {/* SEGMENT MAP/LIST */}
            <IonSegment className='home-segment' onIonChange={e => handleSegmentChange(e)}>
              <IonSegmentButton className='home-segment-button' value="map">
                <IonLabel>Map</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='home-segment-button' value="list">
                <IonLabel>List</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          {/* BUTTON BAR*/}
          <IonToolbar className='home-heading'>
            <div class="button-bar button-bar-home">
              {/* <IonSearchbar className='home-searchbar' value={searchText} onIonChange={e => setSearchText(e.detail.value)} showCancelButton="never"></IonSearchbar> */}
              <IonButton className='ion-no-margin search-btn' id='openSearchModal'>
                <IonIcon slot="icon-only" icon={searchOutline}/>
              </IonButton>
              <IonButton className='ion-no-margin filters-btn' id='openFiltersModal'>
                <IonIcon slot="icon-only" icon={funnelOutline}/>
              </IonButton>
              <IonButton onClick={openPicker} className='ion-no-margin sort-by-btn'>Sort by: {sortValue}</IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
        {/* SEGMENT MAP */}
        <div className='segment-item home-map' id="map">
          {/* GOOGLE MAP */}
          <div className="component-wrapper">
            <capacitor-google-map ref={mapRef}></capacitor-google-map>
          </div>
          {/* SLIDER */}
          <Swiper className='home-slider'
            spaceBetween={16}
            slidesPerView={2.5}
            height={30}>
            <SwiperSlide>
              <SliderItem type="home"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="home"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="home"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="home"/>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem type="home"/>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* SEGMENT LIST */}
        <div className='segment-item home-list' id="list">
            <ProductCard key="1" type="home" title="Strawberry" seller="Maddy" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>

        {/* SEARCH MODAL */}
        <IonModal showBackdrop ref={modal} trigger="openSearchModal" animated breakpoints={[0, 0.4, 0.95]} initialBreakpoint={0.4}>
          <IonContent className="ion-padding">
            <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.95)} placeholder="Search" value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
            <ProductCard type="home" title="Banana" seller="Maddy" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            <ProductCard type="home" title="Strawberry" seller="Wojo" address="Haslegarsvej 24A" time="13:00 - 15:00" picture='https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
          </IonContent>
        </IonModal>

        {/* FILTERS MODAL */}
        <IonModal showBackdrop ref={modal2} trigger="openFiltersModal" animated breakpoints={[0, 0.95]} initialBreakpoint={0.95}>
          <IonContent className="filters-modal">
            <h3 className="ion-margin-bottom">Category</h3>
              <IonItem className='ion-no-margin'>
                <IonLabel>Fruits</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <IonItem className='ion-no-margin'>
                <IonLabel>Vegetables</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <IonItem className='ion-no-margin'> 
                <IonLabel>Cake</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <h3 className="ion-margin-bottom">Type</h3>
              <IonItem className='ion-no-margin'>
                <IonLabel>Vegetarian</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <IonItem className='ion-no-margin'>
                <IonLabel>Vegan</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <IonItem className='ion-no-margin'> 
                <IonLabel>Gluten free</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
              </IonItem>
              <h3 className="ion-margin-bottom">Set your distance</h3>
              <IonRange name='Distance' activeBarStart={1} ticks={true} snaps={true} min={1} max={5} onIonChange={({ detail }) => setDistance(detail.value)}></IonRange>
              <IonLabel>Distance: {distance} km</IonLabel>
              <IonButtons className='filter-buttons'>
                <IonButton fill='solid' color="tertiary" onClick={() => modal2.current?.dismiss()}>Cancel</IonButton>
                <IonButton fill='solid'>Filter</IonButton>
              </IonButtons>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
