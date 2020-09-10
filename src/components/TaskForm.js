import React from 'react';

const taskForm = (props) => {

        return (
            <div>
                <form className='taskForm' onSubmit={ (e) => { props.updateTasks(e, props.goal) } }>
                    <label htmlFor='task'>+ task: </label>
                    <input type='text' className='taskInput'></input>
                </form>
            </div>
        )
}

export default taskForm;