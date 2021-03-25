import React from 'react';
import Style from './Week.module.css';
import Day from './Day/Day.jsx';
import {endOfWeek,eachDayOfInterval} from 'date-fns';
import PropTypes from 'prop-types';

export default class Week extends React.Component{
    render(){
        const {weekStart,currentDate,selectedDate,handleClick}=this.props;
        const weekEnd = endOfWeek(weekStart);

        const daysOfWeek = eachDayOfInterval({start:weekStart,end:weekEnd});

        const res = daysOfWeek.map(function(day){
            return <Day key ={day}  dayDate= {day} currentDate={currentDate} selectedDate = {selectedDate} handleClick={handleClick}></Day>
        });

        return(
            <div className={Style.weekStyle}>
                {res}
            </div>
        )
    }
}

Week.propTypes={
    weekStart:PropTypes.instanceOf(Date).isRequired,
    currentDate:PropTypes.instanceOf(Date).isRequired,
    selectedDate:PropTypes.instanceOf(Date).isRequired,
    handleClick:PropTypes.func,
}

Week.defaultProps = {
    weekStart:new Date(),
    currentDate:new Date(),
    selectedDate:new Date(),
};