import React from 'react';
import GoalDisplay from './GoalDisplay';
import GoalForm from './GoalForm';

class Widget extends React.Component {
    state = {
        goals: []
    }

    addGoal = (goal) => {
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

    deleteTask = (goalId, taskId) => {

        let goal = this.state.goals.filter(goal => {
            return goal.id === goalId;
        });
        let tasks = goal[0].tasks.filter(task => {
            return task.taskId !== taskId
        })
        goal[0].tasks = tasks;
        var updatedGoals = this.state.goals;
        this.setState({
            goals: updatedGoals
        })
    }

    updateTasks = (e, targetGoal) => {
        //prevent page from reloading
        e.preventDefault();
        //put task value into variable
        var task = e.target['0'].value;
        //create copy goals array
        let goals = [...this.state.goals];
        //match target to goal and push updated goal into array
        goals.map(goal => {
            if(goal.id === targetGoal.id){
                goal.tasks.push({ taskId: Math.random(), taskName: task, completed: false })
                return goal;
            } else {
                return goal;
            }
        })
        //wipe the input 
        e.target['0'].value = '';
        // set the state with task value
        this.setState({
            goals: goals
        })
    }

    showTasks = (id) => {
        let goals = [...this.state.goals];
        goals.map(goal => {
            if(id === goal.id){
                goal.tasksVisible = !goal.tasksVisible;
            }
            return goals;
        })
        this.setState({
            goals: goals
        })
    }

    completeGoal = (id, goal) => {

        let goals = [...this.state.goals];
        goals.map(el => {
            let visibleState = el.tasksVisible;
            if(el.id === goal.id){
                el.completed = !el.completed;
                el.completed === true ? el.tasksVisible = false : el.tasksVisible = visibleState;
            }
            return goals;
        })
        this.setState({
            goals: goals
        })
    }


  render(){
    return (
        <div className='container'>
            <div id='goals-container' onClick={ this.toggleSelect } onMouseOver={ (e) => { e.target.style.cursor = 'pointer' } }>
                <GoalDisplay 
                    completeGoal={ this.completeGoal } 
                    deleteGoal={ this.deleteGoal } 
                    addTask={ this.addTask } 
                    deleteTask={ this.deleteTask } 
                    goals={ this.state.goals }
                    updateTasks={ this.updateTasks }
                    showTasks={ this.showTasks } 
                />
            </div>
            <div id='goal-form' className='form'>
                <GoalForm addGoal={ this.addGoal } />
            </div>
        </div>
    )
  } 
}


export default Widget;