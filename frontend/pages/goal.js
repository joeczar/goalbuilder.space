import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import GOAL_QUERY from "../apollo/queries/goals/goal";
import Nav from "../components/nav";

const Goal = () => {
  const router = useRouter();
  return (
    <Query query={GOAL_QUERY} id={router.query.id}>
      {({ data: { goal } }) => {
        console.log(goal);
        return (
          <div className="container">
            <Nav />
            <header>
              <h1>{goal.Title}</h1>
              <p>{goal.Description}</p>
              <p>
                <Moment format="MMM Do YYYY">{goal.published_at}</Moment>
              </p>
            </header>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={goal.Body} />
                
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Goal;
