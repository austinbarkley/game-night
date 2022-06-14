import classNames from 'classnames';
import type PropTypes from 'prop-types';
import { useState } from 'react';

const propTypes = {};

type ICalendarProps = PropTypes.InferProps<typeof propTypes>;

export const Calendar: React.FC<ICalendarProps> = () => {
  const [isSelected, setIsSelected] = useState(false);

  const selectableAreaClasses = classNames({
    selectableArea: true,
    hoverable: !isSelected,
    dragging: isSelected,
  });

  const onDraggingStart = () => {
    setIsSelected(true);
  };

  const onDraggingEnd = () => {
    setIsSelected(false);
  };

  const handleClick = () => {
    !isSelected ? onDraggingStart() : onDraggingEnd();
  };

  return (
    <div className="calendar">
      <div className={selectableAreaClasses} onClick={handleClick}></div>
      <div className="selectableArea"></div>
    </div>
  );
};

Calendar.propTypes = propTypes;

export default Calendar;
