import React from 'react';
import Card from '../Card';

const Goals = ({ goals }) => {
    return (
        <div className="goals-wrapper">
            {goals.map((goal, i) => {
                return (
                    <Card
                        goal={goal}
                        key={`goal__${goal.id}`}
                        class="goalCard"
                    />
                );
            })}
        </div>
    );
};

export default Goals;
