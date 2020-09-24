import React from 'react';

const taskForm = (props) => {

        return (
            <div>
                <form className='taskForm' onSubmit={ (e) => { props.updateTasks(e, props.goal) } }>
                    <label htmlFor='task'>add task: </label>
                    <input type='text' className='taskInput' autoFocus></input>
                </form>
            </div>
        )
}

export default taskForm;