import React from "react";
import Moment from "react-moment";

const goalDate = ({ action, bool, date }) => {
    if (bool) {
        return (
            <div>
                <span className='action'>{action}</span>
                <span className="date">
                    <Moment format='DD.MM.YY'>{date}</Moment>
                </span>
            </div>
        );
    } else {
        return (
            <div>
                <span className='action'>{action}</span>
                <span className='negation'>No</span>
            </div>
        );
    };

};
export default goalDate;