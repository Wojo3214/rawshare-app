import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonIcon, IonButtons } from '@ionic/react';
import { reloadOutline } from 'ionicons/icons';
import { useState} from 'react';
import './Emoji.css';

export default function Emoji() {

    const [emoji, setEmoji] = useState(require('../emojis/ananas.png'));

    
    function createRandomEmoji(){ 
        const emojis = [
            require('../emojis/ananas.png'),
            require('../emojis/avokado.png'),
            require('../emojis/strawberry.png'),
            require('../emojis/banana.png'),
            require('../emojis/pepper.png'),
            require('../emojis/coconut.png')
        ];

        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        setEmoji(randomEmoji);
        console.log(randomEmoji);
    }

  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
            <IonToolbar className='toolbar-icon-padding'>
                <IonTitle>Your profile emoji</IonTitle>
            </IonToolbar>
        </IonHeader>
        <div className='emojiSection'>
            <IonImg src={emoji} className="randomEmoji"></IonImg>
            <IonButton color="tertiary" className='iconButton' onClick={createRandomEmoji}><IonIcon icon={reloadOutline} size="large"/></IonButton>
        </div>
            <IonButtons>
                <IonButton color="tertiary" className='iconButton'><IonIcon icon={reloadOutline} size="large"/></IonButton>
                <IonButton>Accept emoji</IonButton>
            </IonButtons>
      </IonContent>
    </IonPage>
  );
};
