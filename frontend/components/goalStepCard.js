import React from "react";
import Link from "next/link";

const GoalStepCard = ({ step }) => {

    const goalStepCompleted = (completed) => {
        if (completed === null) {
            return "No"
        } else {
            return "Yes"
        }
    }
    
  return (
    <Link href={{ pathname: "goal-step", query: { id: step.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            
          </div>
          <div className="uk-card-body">
            <h1 id="title" className="uk-text-large">
              {step.title}
            </h1>
            <p>
                {step.description}
            </p>
            <div className="completed">
  <span className="completedBox">Complete: {goalStepCompleted(step.completed)}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GoalStepCard;