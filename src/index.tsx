import React from "react"
import ReactDOM from "react-dom"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
library.add( faHome);
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
const onClick = function(){ console.log('Log')}
const Index = () => {
  return <FaIcon  onClick={onClick} icon="home"  />
};

ReactDOM.render(<Index />, document.getElementById("index")); 