import { noop } from 'lodash';
import { useState, useEffect } from 'react';

export interface IUseSelectionReturn {
  isSelecting: boolean;
}

export const useSelection = (
  onSelectingStart = noop,
  onSelectingEnd = noop
): IUseSelectionReturn => {
  const [isSelecting, setIsSelecting] = useState(false);

  const _onStart = () => {
    setIsSelecting(true);
    onSelectingStart();
  };

  const _onEnd = () => {
    setIsSelecting(false);
    onSelectingEnd();
  };

  useEffect(() => {
    document.addEventListener('mousedown', _onStart);
    document.addEventListener('touchstart', _onStart);

    document.addEventListener('mouseup', _onEnd);
    document.addEventListener('touchend', _onEnd);

    return () => {
      document.removeEventListener('mousedown', _onEnd);
      document.removeEventListener('touchstart', _onEnd);
    };
  }, []);

  return { isSelecting }; // update return to use observables?
};

export default useSelection;
