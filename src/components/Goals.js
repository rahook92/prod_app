import React from 'react';
import Tasks from './Tasks';
import TaskForm from './TaskForm';


const Goals = (props) => {

  var revealTaskForm = (e) => {
    const taskForms = document.querySelectorAll('.taskForm');
    e.currentTarget.style.display = 'none';
    for(let form of taskForms){
      if(form.parentNode === e.target.parentNode.parentNode){
        form.style.display = 'block';
      }
    }
  } 
  
  return props.goals.map((goal)=>( 
      <div key={ goal.id }>
          <div className='goals'>
            { goal.title }
          </div>
          <i onClick={() => {props.deleteGoal(goal.id)}}><img id='delete' alt='delete' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC6klEQVRIie2WPWhTURTHf+fdVCxYl1LNwyrWgigOKoKojeLaj7R2EAeLKIq4WEXUwcFvRBA7OFQUB0FHi23ygrjVNlFEHXRxEKXQmERBlAYUm+QdB1tI07yXWIuT/+2ce/7vd87jvvsu/Nc/klRbmAqHVliudKloO7ASaJxaSgJjoI5rzNCyoZHxeQGPd2xdViPmrCoHAVOh3EUYwARO24PDY3MGp8Lbd4nqPWBRpQZLlBXVnmAsEfEqsLwWMh2hY6I6MAcoQJ2KPMyEQ71eBWUnnpp0wK+xKuWKane5yWeBk607G43Jv2Vuk5ZTNmDpmoZIIlWcnDWRMfmL8wgFqMu5XChNzgCnwqEVwD6PB/TZTlxsJy4qeqUo/2A6j3C9nFGQA8nWnY3FOask2IX3J9P7sXPHRoAa4SrwGSFnsM4AJNu2bUA55uE1xuS7PMEKrR5GgIDluv16HqshksgKXEG5vcQZeaebNtVYlnUXCHjbpc0TjLLKBwywJf2y5TDAl9qvN/O5wlmAT/bCkwLr/a3aPKON4iDdEZoA6irAv1pWbu3SyPNPAMm20Gpj8RpYWMGXtZ344umgdFdXc3ZPfrdqf04HZkFgEihU4dPioBScooJUONU0OPxtfPfWWgWxB4fHUC5VAU57g4UPFcxP7Gj8PkDgh7mc6QjtBwhmfvQBb/yt8t4brBrzceYtS3oFNB1uWYdwFORasntzvbx6lUPcQ/i9csXxBLvGDPmY+5ZGRt/o733Qj1IDWm8mF1wEsKNPXyDa79V0wTXR4sSszZRqD90R4aBn53OQKLeCsfiR4tyss7oghXNAdh65EyYv/mc1wHLn2UdE91DdJ1JJrkBPw+PRdOlC2f+tHU08EuEE4P4VVOV40IlHyy36HhiZ9pZOFblP5dOsVBMi7A1G445Xge8NIxhLRChIs8INIF8F0AXuBXKyxg8Kf3C9nbqZdAHtQBMzrrfyAdFYIR+IND4aTlb7zP/6J/oFat/4djal5xYAAAAASUVORK5CYII=" /></i>
          <i onClick={() => {props.completeGoal(goal.id)}}><img id='complete' alt='complete' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRYhe2VTUsCQRyHn1m9RhAkHfoAHVwjWqlb4Ep9hD5FgnTJW/cwwa8RfQK16BboIRuJKDoHCoJ1rN3poGtmmruOG/TyuwzMDPM88//vC/znr0eMmkxc7i0TjRaAHWBOk9EBSi7Rg4Z19DBRoAevAwua4A9RcCPX503EoTs4b3za2b35TOFAUyhndxg+WqBb9pnCUY59nSw2zNr+ih8B3Z4PpqUg7cEF7rkfgVnCbWkV5AB86bsEfMHDEvAND0MgEBwgGuDwZm+MjV1Xji2TxUaimomDW/libz9+K9BSkFYYWwoex633XzURKfmBBxEAQFr5WzBSQxKByz6NwKKAilnLmkMSWvAgAp5EOVHNxKWVvxXK2UY5KWkVZKKaiQvci6BwCPYQAsQQkTOzlrWvrYIE6H5eXd891xWA93bYYLxMU3ZdAU+iDC5MeXNdAW2wlzB/Rj9X4DlEXmeygKIUGl5QniggXJED2iHg24bh5CYK1DeO73h9XRVwouBJl6rgCcGpEXE2r9aK97rn/ef35Q1Fj6tdqgZVFwAAAABJRU5ErkJggg==" /></i>
          <Tasks goalId={ goal.id } deleteTask={ props.deleteTask } tasks={ goal.tasks }/>
          <TaskForm goalId={ goal.id } addTask={ props.addTask } />
          <div onClick={ revealTaskForm } className='addTask'><img alt='plus' src="https://img.icons8.com/android/12/000000/plus.png" /><strong>Add Task</strong></div>
      </div>
  ))
} 

export default Goals;
