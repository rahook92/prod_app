import React from 'react';
import Projects from './Projects';

class Goals extends React.Component {  
  render(){
    return this.props.goals.map((goal)=>( //why parentheses instead of brackets??!
        <div>
            <li>{ goal.title }</li>
            <Projects projects={ goal.projects }/>
        </div>
    ))
  } 
}

export default Goals;