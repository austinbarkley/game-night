import classNames from 'classnames';
import useSelection from 'hooks/useMouseDown';
import { range } from 'lodash';
import type PropTypes from 'prop-types';
import { useState } from 'react';

import './Calendar.scss';

const propTypes = {};

type ICalendarProps = PropTypes.InferProps<typeof propTypes>;

export const Calendar: React.FC<ICalendarProps> = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { isSelecting } = useSelection();

  const selectableTimeClasses = classNames({
    'time-selection': true,
    'time-selection--selected': isSelecting,
    hoverable: !isSelecting,
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
      <div className="time-ranges">
        {range(12, 24).map((time) => {
          return <div key={time} className="time">{`${time}:00`}</div>;
        })}
      </div>
      <div className="time-selection-container">
        {range(12, 24).map((key) => {
          return (
            <div
              key={key}
              className={selectableTimeClasses}
              onClick={handleClick}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

Calendar.propTypes = propTypes;

export default Calendar;
