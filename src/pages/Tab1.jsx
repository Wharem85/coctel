import React, {useState, useEffect} from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import CardDetail from '../components/CardDetail';
import axios from 'axios';
import { Grid } from "@mui/material";
import '../assets/styles/Tab1.css';

var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
var urlDetail = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Tab1 = () => {
  const [coctels, setCoctels] = useState([]);
  const [details, setDetails] = useState([]);
  const [showCoctels, setShowCoctels] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [back, setBack] = useState(false);

  useEffect(() => {
    const getCoctels = async () => {
      const {data} = await axios.get(url);
      setCoctels(data);
    }
    getCoctels();
  }, []);


	const getDetailsCoctel = async (idDrink) => {
		const {data} = await axios.get(`${urlDetail}${idDrink}`);
		setDetails(data);
    setShowCoctels(!showCoctels);
    setShowDetails(!showDetails);
    setBack(!back);
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coctels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Grid container spacing={{ xs: 4, md: 1 }} direction="row"
          justifyContent="center"
          alignItems="center">
          {showCoctels && coctels.drinks?.map(coctel => (
            <Grid item xs={6} md={3}>
              <Card key={coctel.idDrink} coctel={coctel} getDetailsCoctel={getDetailsCoctel} />
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row"
          justifyContent="center"
          alignItems="center">
          {showDetails && details.drinks?.map(detail => (
            <Grid item xs={6} md={8}>
              <CardDetail key={detail.idDrink}
              setShowCoctels={setShowCoctels}
              setShowDetails={setShowDetails}
              detail={detail}
              back={back}
              setBack={setBack} />
            </Grid>
          ))}
        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
