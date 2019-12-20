import React from 'react';

class Projects extends React.Component { 
  render(){
    return this.props.projects.map((project)=>( //why parentheses instead of brackets??!
        <div>
            <li>{ project.title }</li>
        </div>
    ))
  } 
}

export default Projects;