import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import GOAL_QUERY from "../apollo/queries/goals/goal";
import Nav from "../components/nav";
import GoalStepCard from "../components/goalStepCard"

const Goal = () => {
  const router = useRouter();
  
  return (
    <Query query={GOAL_QUERY} id={router.query.id}>
      {({ data: { goal } }) => {
        
        return (
          <div>
            <Nav />
            <header>
              <h1>{goal.title}</h1>
              <p>{goal.description}</p>
              <p>
              Goal started on: <Moment format="MMM Do YYYY">{goal.created_at}</Moment>
              </p>
            </header>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={goal.body} />
              </div>
              <div className="goalSteps uk-container uk-container-small">
                <h1>Goal Steps</h1>
                <ol>
                {goal.goal_steps.map((step, i) => 
                  <li className="goalStep" key={step.id}>
                    <GoalStepCard step={step} />
                  </li>
                )}
                </ol>
              </div>
            </div>
          
           <style jsx>{`
           header {
            
             padding: 0 1rem;
                    
             
           }
   
           main {
             padding: 5rem 0;
             flex: 1;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
           }
          `}
           </style>
           </div>
        );
      }}
    </Query>
    
  );
};

export default Goal;
