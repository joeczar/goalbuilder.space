import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import GOALSTEP_QUERY from "../apollo/queries/goal-steps/goal-step";
import GoalDate from "../components/goalDate"

const URL = process.env.API_URL;

const GoalStep = () => {
  const router = useRouter();

  return (
    <Query query={GOALSTEP_QUERY} id={router.query.id}>
      {({ data: { goalStep } }) => {
        console.log(goalStep);
        return (
          <div>
            <header>
              <h1>{goalStep.title}</h1>
              <p>{goalStep.description}</p>
              <div>
                <span className="createdDate">
                  Created on:{" "}
                  <Moment format="Do MMM YYYY">{goalStep.created_at}</Moment>
                </span>
                <span className="startedDate">
                  <GoalDate action="Started" bool={goalStep.started} date={goalStep.startDate} />
                </span>
                <span className="varifiedDate">
                <GoalDate action="Verified" bool={goalStep.verified} date={goalStep.verificationDate} />
                                   
                </span>
              </div>
            </header>
            <div className="uk-section">
              <div className="goalSteps body uk-container uk-container-small">
                <ReactMarkdown source={goalStep.body} />
              </div>
              <div className="goalSteps evidence uk-container uk-container-small">
                <h2>Evidence</h2>
                <ReactMarkdown source={goalStep.evidence} />
                <ul>
                  {goalStep.evidenceMedia.map((img, i) => {
                    return (
                      <li key={i+img.url}>
                        <img
                          className="evidenceImg"
                          src={URL + img.url}
                          alt={img.alternativeText}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default GoalStep;
