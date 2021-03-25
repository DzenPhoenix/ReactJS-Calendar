import React from 'react';
import Style from './Day.module.css';
import { format, isSameDay,isSameMonth } from 'date-fns';
import classNames from 'class-names';
import PropTypes from 'prop-types';

export default class Day extends React.Component {
    render() {
        
        const { dayDate, currentDate, selectedDate,handleClick } = this.props;
        const isCurrent = isSameDay(currentDate,dayDate);
        const isSelected = isSameDay(selectedDate, dayDate);
        const isAnotherMonth = !isSameMonth(currentDate,dayDate);

        let dayStyle = classNames(Style.dayStyle, {
            [Style.currentDayStyle]: isCurrent,
            [Style.selectedDayStyle]: isSelected,
            [Style.anotherMonthStyle]: isAnotherMonth,
        });


        return (
            <div className={dayStyle} onClick={(e)=>{handleClick(dayDate,e);}}>
                <div>{format(dayDate, "d")}</div>
            </div>
        )
    }
}

Day.propTypes={
    dayDate:PropTypes.instanceOf(Date).isRequired,
    currentDate:PropTypes.instanceOf(Date).isRequired,
    selectedDate:PropTypes.instanceOf(Date).isRequired,
    handleClick:PropTypes.func,
}

Day.defaultProps = {
    dayDate:new Date(),
    currentDate:new Date(),
    selectedDate:new Date(),
};