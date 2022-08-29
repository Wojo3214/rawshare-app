import { IonRow, IonCol, IonButton, IonAvatar, IonItem, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import { starSharp, timeOutline, locationOutline } from 'ionicons/icons';
import { Clock, Calendar, ShoppingBag, MapPin } from 'react-feather';
import './Status.css';


export default function Status({status}) {
    return (
        <div className="status">
            {status == "accepted" ? 
                <>
                    <span className="dot accepted"></span>
                    <span className="explanation">Accepted</span>
                </>
            :   <>
                    <span className="dot pending"></span>
                    <span className="explanation">Pending</span>
                </>
            }
            
            
        </div>
    );
    
};