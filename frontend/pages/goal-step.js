import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Link from 'next/link';
import GOALSTEP_QUERY from "../apollo/queries/goal-steps/goal-step";

import GoalDates from '../components/goalDates'
import GoalStepStyled from './goalStep.styled';

const URL = process.env.API_URL;

const GoalStep = () => {
  const router = useRouter();

  return (
    <Query query={GOALSTEP_QUERY} id={router.query.id}>
      {({ data: { goalStep } }) => {
        
        return (
            <GoalStepStyled className='goal-step'>
                <header>
                    <h1>
                        <Link
                            href={{
                                pathname: 'goal',
                                query: { id: goalStep.goal.id },
                            }}
                        >
                            <a>{goalStep.goal.title}</a>
                        </Link>

                        <span className='stepNr'></span>
                    </h1>

                    <h1>
                        Step {goalStep.step}:{' '} 
                        {goalStep.title}
                    </h1>
                    <p>Description: {goalStep.description}</p>
                    <GoalDates goal={goalStep} />
                </header>
                <article className='content'>
                    <div className='body shadow'>
                        <ReactMarkdown source={goalStep.body} />
                    </div>
                    <div className='evidence shadow'>
                        <h2>Evidence</h2>
                        <ReactMarkdown source={goalStep.evidence} />
                        <ul class='evidence-media'>
                            {goalStep.evidenceMedia.map((img, i) => {
                                return (
                                    <li key={i + img.url} className="shadow">
                                        <img
                                            className='evidenceImg'
                                            src={URL + img.url}
                                            alt={img.alternativeText}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </article>
            </GoalStepStyled>
        );
      }}
    </Query>
  );
};

export default GoalStep;
