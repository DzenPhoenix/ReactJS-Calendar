import React from 'react';
import Style from './Month.module.css';
import Week from './Week/Week.jsx';
import {startOfMonth,endOfMonth,eachWeekOfInterval} from 'date-fns';
import PropTypes from 'prop-types';

export default class Month extends React.Component{
    render(){
        const {currentDate,selectedDate,handleClick}=this.props;
        const startMonth = startOfMonth(currentDate);
        const endMonth = endOfMonth(currentDate);

        const weeks = eachWeekOfInterval({start:startMonth,end:endMonth});

        const res = weeks.map(function(week){
            return < Week key = {week} weekStart={week} currentDate={currentDate} selectedDate={selectedDate} handleClick={handleClick}></Week>
        });

        return(
            <div className={Style.monthStyle}>
                {res}
            </div>
        )
    }
}

Month.propTypes={
    currentDate:PropTypes.instanceOf(Date).isRequired,
    selectedDate:PropTypes.instanceOf(Date).isRequired,
    handleClick:PropTypes.func,
}

Month.defaultProps = {
    currentDate:new Date(),
    selectedDate:new Date(),
};