import React from 'react';

const Tasks = (props) => { 
  if(!props.tasks){
    return null;
  }
  return props.tasks.map((task)=>( 
      <div className='tasks' key={ task.id }>
          <li onClick={ () => { props.deleteTask(props.goalId, task.id) } }>{ task.title }</li>
      </div>
  ))
} 

 

export default Tasks;