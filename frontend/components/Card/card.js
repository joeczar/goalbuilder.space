import React from "react";
import Link from "next/link";
import GoalDate from "../goalDate"
import { StyledCard } from "./card.styled"

const Card = ({ goal }) => {
    
  return (
    <Link href={{ pathname: "goal", query: { id: goal.id } }}>
      <StyledCard>
      <a>
        <div className="card-wrapper">
          <div className="goal-image">
            
          </div>
          <div className="card-body">
            <ul>
              {goal.categories.map( cat => {
                return (
                <li className="category-title" className="uppercase" key={cat.id}>
                  <small>{cat.title}</small>
                </li>
                )
              })}
            </ul>
            <h2 id="title" className="text-large">
              {goal.title}
            </h2>
            <small>
            <div>
                <span className="createdDate">
                <GoalDate action="Created" bool="true" date={goal.created_at} /></span>
                <span className="startedDate">
                  <GoalDate action="Started" bool={goal.started} date={goal.dateStarted} />
                </span>
                <span className="varifiedDate">
                <GoalDate action="Verified" bool={goal.verified} date={goal.verificationDate} />
                </span>
                <span className="completionDate">
                <GoalDate action="Completed" bool={goal.complete} date={goal.completionDate} />
                </span>
                </div>
            </small>
          </div>
        </div>
      </a>
      </StyledCard>
    </Link>
  );
};

export default Card;