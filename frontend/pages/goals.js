import Head from "next/head";
import Goals from "../components/goals";
import Query from "../components/query";
import Goals_QUERY from "../apollo/queries/goals/goals";
import StyledGoals from "./goals.styled"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Goals | GoalBuilder.Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <StyledGoals>
        <div>
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>My Goals</h1>
              <Query query={Goals_QUERY}>
                {({ data: { goals } }) => {
                  console.log({goals})
                  return <Goals goals={goals} />;
                }}
              </Query>
            </div>
          </div>
        </div>
        </StyledGoals>
      </main>
    </div>
  );
}
