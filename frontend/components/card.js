import React from "react";
import Link from "next/link";

const Card = ({ goal }) => {
    
  return (
    <Link href={{ pathname: "goal", query: { id: goal.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {goal.categories.title}
            </p>
            <h1 id="title" className="uk-text-large">
              {goal.Title}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;