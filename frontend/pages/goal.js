import { useRouter } from 'next/router';
import Query from '../components/query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import GOAL_QUERY from '../apollo/queries/goals/goal';
import GoalStepCard from '../components/goalStepCard/goalStepCard';
import { StyledGoal } from './goal.styled';
import GoalDates from '../components/goalDates';

const Goal = () => {
    const router = useRouter();

    return (
        <Query query={GOAL_QUERY} id={router.query.id}>
            {({ data: { goal } }) => {
                return (
                    <StyledGoal>
                        <header className="shadow">
                            <h1>{goal.title}</h1>
                            <p>{goal.description}</p>
                            <GoalDates goal={goal} />
                        </header>

                        <article>
                            <div className="goal-body shadow">
                                <ReactMarkdown source={goal.body} />
                            </div>
                            <div className="goalSteps">
                                <h1>Goal Steps</h1>
                                <ol className="stepList">
                                    {goal.goal_steps.map((step, i) => (
                                        <li className="goalStep" key={step.id}>
                                            <GoalStepCard step={step} className="shadow"/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </article>
                    </StyledGoal>
                );
            }}
        </Query>
    );
};

export default Goal;
