import React from "react";
import Card from "./Card/card";

const Goals = ({ goals }) => {
    
  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {goals.map((goal, i) => {
            return <Card goal={goal} key={`goal__${goal.id}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Goals;
