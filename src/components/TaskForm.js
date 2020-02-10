import React from 'react';

class TaskForm extends React.Component {
    state = {
        title: null,
        completed: false
        }
        
    updateTasks = (e) => {
        //prevent page from reloading
        e.preventDefault();
        //put task value into variable
        var taskInputs = Array.from(document.querySelectorAll('.taskInput'));
        var task = taskInputs.filter(task => {
            return task.value !== '';
        })
        task = task[0].value;
        // set the state with task value
        this.setState({
            title: task
        }, () => {
            let taskInputs = document.querySelectorAll('.taskInput')
            this.props.addTask(this.state, this.props.goalId);
            for(let input of taskInputs){
                if(input.value !== ''){
                    input.value = '';
                }
            }
        })
    }
    render(){
        return (
                <form className='taskForm' onSubmit={ this.updateTasks }>
                    <label htmlFor='task'>Task: </label>
                    <input type='text' className='taskInput'></input>
                </form>
        )
    }
}

export default TaskForm;