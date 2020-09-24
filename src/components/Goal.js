import React, {useEffect, useRef} from 'react';
import GoalButtons from './goalButtons';

const Goal = (props) => {

    const goalRef = useRef(null);

    useEffect(()=>{
        console.log(goalRef.current);
    }, [])

    return (
        <div className='goals'>
            <div ref={ goalRef } className={ props.goal.completed === false ? null : 'completed' } onClick={ () => { props.showTasks(props.goal.id) } }>
                { props.goal.goalName }
            </div>
            <GoalButtons goal={ props.goal } deleteGoal={ props.deleteGoal } completeGoal={ props.completeGoal } goals={ props.goals } />
        </div>
    )
}

export default Goal;