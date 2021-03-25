import React from 'react';
import Style from './Calendar.module.css';
import CalendarGrid from './CalendarGrid/CalendarGrid.jsx';
import CalendarTitle from './CalendarTitle/CalendarTitle.jsx';
import PropTypes from 'prop-types';

export default class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedDate:this.props.selectedDate,
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick = function(value,e){
        this.setState({selectedDate:value,});
    }

    render(){
        const currentDate = this.props.currentDate;
        return(
            <div className={Style.calendar}>
                <CalendarTitle selectedDate={this.state.selectedDate}></CalendarTitle>
                <CalendarGrid currentDate={currentDate} selectedDate = {this.state.selectedDate} handleClick={this.handleClick}></CalendarGrid>
            </div>
        )
    }
}

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
}

Calendar.defaultProps = {
    currentDate: new Date(),
    selectedDate: new Date(),
};