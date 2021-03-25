import React from 'react';
import Style from './CalendarHead.module.css';

export default class CalendarHead extends React.Component{
    render(){
        return(
            <div className={Style.head}>
                <div className={Style.cell}>Sun</div>
                <div className={Style.cell}>Mon</div>
                <div className={Style.cell}>Tu</div>
                <div className={Style.cell}>Wen</div>
                <div className={Style.cell}>Th</div>
                <div className={Style.cell}>Fr</div>
                <div className={Style.cell}>Sa</div>
            </div>
        )
    }
}