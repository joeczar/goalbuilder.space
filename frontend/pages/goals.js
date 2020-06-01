import Head from "next/head";
import { Goals } from "../components";
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
          <div className="pageTitle">
          <h1>My Goals</h1>
          </div>
          
              
              <Query query={Goals_QUERY} className="shadow">
                {({ data: { goals } }) => {
                  
                  return <Goals goals={goals} />;
                }}
              </Query>
           
        
        </StyledGoals>
      </main>
    </div>
  );
}
