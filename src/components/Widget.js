import React from 'react';
import Goals from './Goals';

class Widget extends React.Component {
    state = {
        goals: [
            {
                id: 1,
                title: 'Get a Web-Dev Job',
                completed: false,
                projects: [
                    {
                        id: 1,
                        title: 'Learn React',
                        completed: false
                    },
                    {
                        id: 1,
                        title: 'Create a portfolio',
                        completed: false
                    },
                    {
                        id: 1,
                        title: 'Apply to tech companies',
                        completed: false
                    }
                ]
            },
            {
                id: 2,
                title: 'Decrease running mile average down to 9',
                completed: false,
                projects: [
                    {
                        id: 2,
                        title: 'HIIT training',
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'stretch more',
                        completed: false
                    }
                ]
            },
            {
                id: 3,
                title: 'Meditate for an hour straight',
                completed: false,
                projects: [
                    {
                        id: 3,
                        title: 'meditate for 30 minutes',
                        completed: false
                    },
                    {
                        id: 3,
                        title: 'meditate for 45 minutes',
                        completed: false
                    }
                ]
            }
        ]
    }
  render(){
    return (
      <div>
          <Goals goals={this.state.goals} />
      </div>
    )
  } 
}

export default Widget;