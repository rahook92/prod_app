import React from 'react';
import Projects from './Projects';
// import PropTypes from 'prop-types';

class Goals extends React.Component {  
  render(){
    return this.props.goals.map((goal)=>( 
        <div>
            <li>{ goal.title }</li>
            <Projects projects={ goal.projects }/>
        </div>
    ))
  } 
}

// Goals.propTypes = {
//   goal: PropTypes.object.isRequired
// }

export default Goals;