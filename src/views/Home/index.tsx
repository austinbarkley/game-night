import { IonContent, IonPage } from '@ionic/react';
import Toolbar from 'components/Toolbar';
import type PropTypes from 'prop-types';
import { Route } from 'react-router';

const propTypes = {};

type IHomeProps = PropTypes.InferProps<typeof propTypes>;

export const Home: React.FC<IHomeProps> = () => {
  return (
    <IonPage id="main">
      <Toolbar />

      <IonContent>
        <Route exact path="">
          <p>Home</p>
        </Route>
      </IonContent>
    </IonPage>
  );
};

Home.propTypes = propTypes;

export default Home;
