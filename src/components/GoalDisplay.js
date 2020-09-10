import React from 'react';
import Tasks from './Tasks';
import Goal from './Goal';

const goalDisplay = (props) => {

    return props.goals.map((goal)=>(
      <div className='goalDisplay' key={ goal.id }>
          <Goal 
            goal={ goal } 
            deleteGoal={ props.deleteGoal } 
            completeGoal={ props.completeGoal } 
            goals={ props.goals }
            showTasks={ props.showTasks }  />
          { goal.tasksVisible === true ?
            <Tasks 
              goal={ goal } 
              goalId={ goal.id } 
              deleteTask={ props.deleteTask } 
              updateTasks={ props.updateTasks } 
              addTask={ props.addTask } 
              tasks={ goal.tasks } /> :
          null }
      </div>
  ))
} 

export default goalDisplay;
