import type PropTypes from 'prop-types';

import './Calendar.scss;';

const propTypes = {};

type ICalendarProps = PropTypes.InferProps<typeof propTypes>;

export const Calendar: React.FC<ICalendarProps> = ({}) => {
  return <div className="calendar"></div>;
};

Calendar.propTypes = propTypes;

export default Calendar;
