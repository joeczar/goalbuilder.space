import React from 'react';
import GoalDate from './goalDate';

const GoalDates = ({ goal }) => {
    return (
        <div className="goalDates">
            <GoalDate
                className="createdDate"
                action="Created"
                bool="true"
                date={goal.created_at}
            />

            <GoalDate
                className="startedDate"
                action="Started"
                bool={goal.started}
                date={goal.dateStarted}
            />

            <GoalDate
                className="varifiedDate"
                action="Verified"
                bool={goal.verified}
                date={goal.verificationDate}
            />

            <GoalDate
                className="completionDate"
                action="Completed"
                bool={goal.complete}
                date={goal.completionDate}
            />
        </div>
    );
};
export default GoalDates;
