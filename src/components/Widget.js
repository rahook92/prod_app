import React from 'react';
import Goals from './Goals';
import GoalForm from './GoalForm';

class Widget extends React.Component {
    state = {
        goals: []
    }

    toggleSelect = (e) => {
        var currentGoal = e.target;
        var goalNodes = document.querySelectorAll('.goals');
        var taskNodes = document.querySelectorAll('.tasks');
        var addTaskNodes = document.querySelectorAll('.addTask');
        var taskForms = document.querySelectorAll('.taskForm');

        for(let goal of goalNodes){
            if(goal === currentGoal){
                goal.classList.toggle('active');
            }
        }
        if(currentGoal.classList.contains('active')) {
            for(let task of taskNodes){
                if(task.parentNode.firstChild.classList.contains('active')){
                    task.style.display = 'block';
                }
            }
            for(let addTask of addTaskNodes){
                if(addTask.parentNode.firstChild.classList.contains('active') && addTask.parentNode.firstChild ===   e.target){
                    addTask.style.display = 'block';
                }
            }
       }  else if(!e.target.classList.contains('goals')){
            e.preventDefault();
        } else {
            for(let task of taskNodes){
                if(task.parentNode ===  currentGoal.parentNode){
                    task.style.display = 'none';

                }
            }
            for(let addTask of addTaskNodes){
                if(addTask.parentNode ===  currentGoal.parentNode){
                    addTask.style.display = 'none';
                }
            }
            for(let form of taskForms){
                if(form.parentNode === e.target.parentNode){
                  form.style.display = 'none';
                }
              }
        } 
    }
    addGoal = (goal) => {
        goal.id = Math.random()
        let goals = [...this.state.goals, goal]
        this.setState({
            goals: goals
        })
    }
    deleteGoal = (id) => {
        let goals = this.state.goals.filter(goal => {
            return goal.id !== id
        });
        this.setState({
            goals: goals
        })
    }
    addTask = (task, goalId) => {
        task.id = Math.random();
        let res = this.state.goals.filter(goal => {
            if(goal.id === goalId){
                goal.tasks.push(task);
            }
            return goal
        });
        this.setState({
            goals: res
        }, function(){
            let taskNodes = document.querySelectorAll('.tasks');
            var addTaskNodes = document.querySelectorAll('.addTask');
            for(let task of taskNodes){
                if(task.parentNode.firstChild.classList.contains('active')){
                    task.style.display = 'block';
                }
            }
            for(let addTask of addTaskNodes){
                if(addTask.parentNode.firstChild.classList.contains('active')){
                    addTask.style.display = 'none';
                }
            }
        })
    }
    deleteTask = (goalId, taskId) => {
        let goal = this.state.goals.filter(goal => {
            return goal.id === goalId;
        });
        let tasks = goal[0].tasks.filter(task => {
            return task.id !== taskId
        })
        goal[0].tasks = tasks;
        var updatedGoals = this.state.goals;
        this.setState({
            goals: updatedGoals
        })
    }
    completeGoal = (id) => {
        var addTaskNodes = document.querySelectorAll('.addTask');
        var taskForms = document.querySelectorAll('.taskForm');
        let goalsDOM = Array.from(document.querySelectorAll('.goals'));

        this.state.goals.map(goal => {
            //complete the goal in the state
            if(goal.id === id){
                goal.completed === false ? goal.completed = true : goal.completed = false;
                //match the completed goal from the state with the goal in the DOM and give it class completed
                goalsDOM.filter(goalTarget=>{
                    if(goalTarget.innerHTML === goal.title && goal.completed === true){
                        let taskNodes = document.querySelectorAll('.tasks');
                        goalTarget.classList.remove('active');
                        goalTarget.classList.add('completed');
                        goalTarget.nextElementSibling.nextElementSibling.firstElementChild.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYA\
                        AAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACFElEQVRIie2WPW/TUBSGn2O7DJSkSTMgQVQVlaE/AUpKZ6hEysRAN3ZADIwg+AnsSEhljVDTVN2pqfoP2KJKbelCQj6kLrbvY\
                        aBIjhPHTpTA0nc7H/Zz36t7jy5c6h9J0jY23fyCLUEZI+sIi0DxonSCcoRozQ+c7cJa83gi4PODwk1f/TeqPAPshHYjQiWw5HX+butobHDna25DLd0CriUtMKKuIJvZUqsa12D\
                        FFdr7uRdqaWUMKEBG0S/tb9nncQ0DHV84rQxbWEoZQR4Pct4HbhzOFx0/+M54Tgep6zCzPFv6+SOc7HNke8H7CUIBMh7eu2iyx3HTzS/YmDrJp3dUBb5jLxbuNE/+Jnoc2xJsTA\
                        EKYDueXw4nerda5cEUoH8k8jAeDLenBoalcOBEitej3WKZe9mV7sEohI6bLylmP5K+EQ6S76mffp6HlPhN1PEZkAkn1LLctjs3ElUxg9Kn4SDquD4SYTT1/DsC1t1pUVWoxYL9w\
                        NkGgilw/cC2d2LBhbXmscKnSVMFPoanVh8Y4IrlvAW6E+R2bNM/q/vAV1cap6BPmMyWG1Frc/b++VkiGGCu1NlD9BUMvhdpoYi+zK7+2hlUHP70cXOPFP1M5G6nUEfUPM2udmt\
                        xDUMnV7bUqlomWELlA+CnABpEthzjLQ+DwgjP28bhfNHx/DIi68Atws9bqKO668841ejpvdR/12+s7qwIA69phQAAAABJRU5ErkJggg==";
                        for(let task of taskNodes){
                            if(task.parentNode ===  goalTarget.parentNode){
                                task.style.display = 'none';
                            }
                        }
                        for(let addTask of addTaskNodes){
                            if(addTask.parentNode ===  goalTarget.parentNode){
                                addTask.style.display = 'none';
                            }
                        }
                        for(let form of taskForms){
                            if(form.parentNode === goalTarget.parentNode){
                                form.style.display = 'none';
                            }
                        }
                    } else if(goalTarget.innerHTML === goal.title && goal.completed === false){
                        let taskNodes = document.querySelectorAll('.tasks');
                        goalTarget.classList.remove('active');
                        goalTarget.classList.remove('completed');
                        goalTarget.nextElementSibling.nextElementSibling.firstElementChild.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAA\
                        Bzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRYhe2VTUsCQRyHn1m9RhAkHfoAHVwjWqlb4Ep9hD5FgnTJW/cwwa8RfQK16BboIRuJKDoHCoJ1rN3poGtmmruOG/TyuwzMD\
                        PM88//vC/znr0eMmkxc7i0TjRaAHWBOk9EBSi7Rg4Z19DBRoAevAwua4A9RcCPX503EoTs4b3za2b35TOFAUyhndxg+WqBb9pnCUY59nSw2zNr+ih8B3Z4PpqUg7cEF7rkfgVnC\
                        bWkV5AB86bsEfMHDEvAND0MgEBwgGuDwZm+MjV1Xji2TxUaimomDW/libz9+K9BSkFYYWwoex633XzURKfmBBxEAQFr5WzBSQxKByz6NwKKAilnLmkMSWvAgAp5EOVHNxKWVvxXK\
                        2UY5KWkVZKKaiQvci6BwCPYQAsQQkTOzlrWvrYIE6H5eXd891xWA93bYYLxMU3ZdAU+iDC5MeXNdAW2wlzB/Rj9X4DlEXmeygKIUGl5QniggXJED2iHg24bh5CYK1DeO73h9XRVwo\
                        uBJl6rgCcGpEXE2r9aK97rn/ef35Q1Fj6tdqgZVFwAAAABJRU5ErkJggg==";
                    }
                })
            }
        })
    }
  render(){
    return (
        <div className='container'>
            <div id='goals-container' onClick={ this.toggleSelect } onMouseOver={ (e) => { e.target.style.cursor = 'pointer' } }>
                <Goals completeGoal={ this.completeGoal } deleteGoal={ this.deleteGoal } addTask={ this.addTask } deleteTask={ this.deleteTask } goals={ this.state.goals } />
            </div>
            <div id='goal-form' className='form'>
                <GoalForm addGoal={ this.addGoal } />
            </div>
        </div>
    )
  } 
}


export default Widget;