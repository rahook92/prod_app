import React from 'react';
import TaskForm from './TaskForm';

const tasks = (props) => { 

  if(props.tasks.length === 0){
    return <TaskForm goal={ props.goal } addTask={ props.addTask } updateTasks={ props.updateTasks } />
  } else {
    return ( 
      <div>
          { props.tasks.map(task => {
              return <li key={ task.taskId } onClick={ () => { props.deleteTask(props.goal.id,task.taskId) } } className='tasks'>{ task.taskName }</li> 
            }) 
          }
          <TaskForm goal={ props.goal } addTask={ props.addTask } updateTasks={ props.updateTasks } />
      </div>
    )
  }
} 

 

export default tasks;