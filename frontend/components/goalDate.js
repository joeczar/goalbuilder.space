import React from "react";
import Moment from "react-moment";

const goalDate = ({ action, bool, date }) => {
    if (bool) {
        return (
            <div>
                {action} on: {" "}
                <Moment format="Do MMM YYYY">{date}</Moment>
            </div>
            )
    } else {
        return (
            <div>
                Not {action}
            </div>
        )
    };

};
export default goalDate;