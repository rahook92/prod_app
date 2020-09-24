import React from 'react';

const goalForm = (props) => {

        const updateGoals = (e) => {
            //prevent page from reloading
            e.preventDefault();
            //put goal value into variable
            var goal = {
                id: Math.random(),
                goalName: document.getElementById('goal').value,
                tasks: [],
                completed: false,
                tasksVisible: false
            }
            //add goal to widget state
            props.addGoal(goal);
            //resets the form
            document.getElementById('addGoal').reset();
        }
        return (
            <form id='addGoal' onSubmit={ updateGoals }>
                <input type='text' id='goal' placeholder='Create a new goal' autoFocus></input>
            </form>
        )
}

export default goalForm;

