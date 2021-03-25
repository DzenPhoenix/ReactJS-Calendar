import React from 'react';
import Style from './CalendarGrid.module.css';
import Month from './Month/Month.jsx';
import CalendarHead from './CalendarHead/CalendarHead.jsx';
import PropTypes from 'prop-types';

export default class CalendarGrid extends React.Component {
    render() {
        const { currentDate, selectedDate, handleClick } = this.props;
        return (
            <div className={Style.grid}>
                <CalendarHead></CalendarHead>
                <Month currentDate={currentDate} selectedDate={selectedDate} handleClick={handleClick}></Month>
            </div>)
    }
}

CalendarGrid.propTypes = {
    currentDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    handleClick: PropTypes.func,
}

CalendarGrid.defaultProps = {
    currentDate: new Date(),
    selectedDate: new Date(),
};
