import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import Toolbar from 'components/Toolbar';
import type PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

import { Calendar } from './components';

const propTypes = {};

type ICalendarProps = PropTypes.InferProps<typeof propTypes>;

export const CalendarView: React.FC<ICalendarProps> = () => {
  return (
    <IonPage id="main">
      <Toolbar />

      <IonContent>
        <Switch>
          <Route exact path="">
            <IonGrid style={{ marginTop: '24px' }}>
              <IonRow>
                <IonCol size="12">
                  <Calendar />
                </IonCol>
              </IonRow>
            </IonGrid>
          </Route>
        </Switch>
      </IonContent>
    </IonPage>
  );
};

CalendarView.propTypes = propTypes;

export default CalendarView;
