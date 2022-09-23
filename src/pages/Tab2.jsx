import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardDetail from '../components/CardDetail';
import '../assets/styles/Tab2.css';

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detalles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardDetail />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
