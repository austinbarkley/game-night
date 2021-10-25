import { menuController } from '@ionic/core';
import { IonButtons, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import type PropTypes from 'prop-types';

const propTypes = {};

type IToolbarProps = PropTypes.InferProps<typeof propTypes>;

export const Toolbar: React.FC<IToolbarProps> = () => {
  const toggleSideNav = () => {
    menuController.open();
  };

  return (
    <IonToolbar>
      <IonButtons>
        <IonMenuButton onClick={toggleSideNav}></IonMenuButton>
        <IonTitle>Game Nights</IonTitle>
      </IonButtons>
    </IonToolbar>
  );
};

Toolbar.propTypes = propTypes;

export default Toolbar;
