import React from 'react';

class Projects extends React.Component { 
  render(){
    return this.props.projects.map((project)=>( 
        <div style={ projectStyle }>
            <li>{ project.title }</li>
        </div>
    ))
  } 
}

var projectStyle = {
  width: '50%',
  backgroundColor: 'rgb(195, 191, 191)',
  borderRadius: '4px'
}

export default Projects;