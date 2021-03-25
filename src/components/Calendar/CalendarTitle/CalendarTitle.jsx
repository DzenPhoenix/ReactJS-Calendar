
import React from 'react';
import Style from './CalendarTitle.module.css';
import {format} from 'date-fns';
import PropTypes from 'prop-types';

export default class CalendarTitle extends React.Component{
    render(){
        const selectedDate = this.props.selectedDate;
        return(
            <div className={Style.wrapper}>
                <div className={Style.title}>
                    {format(selectedDate,'eeee do')}
                </div>
            </div>
        )
    }
}

CalendarTitle.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
}

CalendarTitle.defaultProps = {
    selectedDate: new Date(),
};