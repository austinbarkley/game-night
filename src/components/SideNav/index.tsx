import { menuController } from '@ionic/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonToolbar,
} from '@ionic/react';
import { calendarClearOutline, home } from 'ionicons/icons';
import type PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const propTypes = {};

type ISideNavProps = PropTypes.InferProps<typeof propTypes>;

export const SideNav: React.FC<ISideNavProps> = () => {
  const [t] = useTranslation();

  const toggleSideNav = () => {
    menuController.open();
  };

  const onRouteClick = () => {
    menuController.close();
  };

  return (
    <>
      <IonMenuButton onClick={toggleSideNav}></IonMenuButton>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonItem button onClick={onRouteClick} routerLink="/home">
              <IonIcon icon={home} slot="start" />
              <IonLabel>Game Night</IonLabel>
            </IonItem>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem button onClick={onRouteClick} routerLink="/calendar">
              <IonIcon icon={calendarClearOutline} slot="start" />
              <IonLabel>{t('Calendar')}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

SideNav.propTypes = propTypes;

export default SideNav;
