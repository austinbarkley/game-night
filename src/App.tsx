import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SideNav from 'components/SideNav';
// eslint-disable-next-line import/order
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';

/* Views import */
import { CalendarView } from 'views/Calendar';
import Home from 'views/Home';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <SideNav />
        <IonRouterOutlet>
          <Redirect to="/" />
          <Route exact path="/" component={Home}></Route>
          <Route path="/calendar" component={CalendarView} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
