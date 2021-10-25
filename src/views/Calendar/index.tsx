import { IonButton, IonContent, IonPage } from '@ionic/react';
import Toolbar from 'components/Toolbar';
import type PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

const propTypes = {};

type ICalendarProps = PropTypes.InferProps<typeof propTypes>;

export const Calendar: React.FC<ICalendarProps> = () => {
  return (
    <IonPage id="main">
      <Toolbar />

      <IonContent>
        <Switch>
          <Route exact path="">
            <IonButton>test</IonButton>
          </Route>
        </Switch>
      </IonContent>
    </IonPage>
  );
};

Calendar.propTypes = propTypes;

export default Calendar;
