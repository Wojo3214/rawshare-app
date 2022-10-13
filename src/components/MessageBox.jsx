import { IonIcon, IonRow, IonCol } from '@ionic/react';
import { warningOutline, informationCircleOutline, checkmarkOutline, alertCircleOutline } from 'ionicons/icons';
import './MessageBox.css';

export default function MessageBox({ type, title, text }) {
  if(type == "informative"){
    return (
      <IonRow className="ion-margin message-box info">
        <IonCol className="icon-container" size="2" color="info">
          <div className="icon">
            <IonIcon icon={informationCircleOutline}/>
          </div>
        </IonCol>
        <IonCol size="10" className='ion-padding-horizontal message-box-text-container'>
            <p><b>{title}</b></p>
            <p>{text}</p>
        </IonCol>
      </IonRow>
    );
  } else if(type == "warning"){
    return (
      <IonRow className="ion-margin message-box warning">
        <IonCol className="icon-container" size="2" color="info">
          <div className="icon">  
            <IonIcon icon={warningOutline}/>
          </div>
        </IonCol>
        <IonCol size="10" className='ion-padding-horizontal message-box-text-container'>
            <p><b>{title}</b></p>
            <p>{text}</p>
        </IonCol>
      </IonRow>
    );
  } else if(type == "error"){
    return (
      <IonRow className="ion-margin message-box error">
        <IonCol className="icon-container" size="2" color="info">
          <div className="icon">
            <IonIcon icon={alertCircleOutline}/>
          </div>
        </IonCol>
        <IonCol size="10" className='ion-padding-horizontal message-box-text-container'>
            <p><b>{title}</b></p>
            <p>{text}</p>
        </IonCol>
      </IonRow>
    );
  } else if(type == "success"){
    return (
      <IonRow className="ion-margin message-box success">
        <IonCol className="icon-container" size="2" color="info">
         <div className="icon">
            <IonIcon icon={checkmarkOutline}/>
          </div>
        </IonCol>
        <IonCol size="10" className='ion-padding-horizontal message-box-text-container'>
            <p><b>{title}</b></p>
            <p>{text}</p>
        </IonCol>
      </IonRow>
    );
  } else {
    console.log("Component type is not choosen");
  }
  
};
