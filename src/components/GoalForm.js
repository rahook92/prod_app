import React from 'react';

class GoalForm extends React.Component {
    state = {
        title: null,
        completed: false
        }

        updateGoals = (e) => {
            //prevent page from reloading
            e.preventDefault();
            //put goal value into variable
            var goal = document.getElementById('goal').value;
            //set the state with goal value
            this.setState({
                title: goal,
                tasks: []
            }, () => {
                this.props.addGoal(this.state);
                document.getElementById('addGoal').reset();
            })

        }
        
    render(){
        return (
            <form id='addGoal' onSubmit={ this.updateGoals }>
                <input type='text' id='goal' placeholder='Create a new goal'></input>
            </form>
        )
    }
}

export default GoalForm;

