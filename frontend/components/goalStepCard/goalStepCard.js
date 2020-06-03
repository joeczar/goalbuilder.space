import React from 'react';
import Link from 'next/link';
import GoalDates from '../goalDates';
import {StyledStepCard} from './goalStepCard.styled';

const GoalStepCard = ({ step }) => {
    const goalStepCompleted = (completed) => {
        if (completed === null) {
            return 'No';
        } else {
            return 'Yes';
        }
    };

    return (
        <Link href={{ pathname: 'goal-step', query: { id: step.id } }}>
            <a className="uk-link-reset">
                <StyledStepCard>
                    <div className="media"></div>
                    <div className="card-body">
                        <h1 className="title text-large">
                           Step {step.step} - {step.title}
                        </h1>
                        <p>{step.description}</p>
                        <GoalDates goal={step} />
                    </div>
                </StyledStepCard>
            </a>
        </Link>
    );
};

export default GoalStepCard;
