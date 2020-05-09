import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Component/Nav';
import Logout from './Component/Logout';
import SignIn from './Component/SignIn';
import {Link,Switch,Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React Nanosec Infotech Systems
         </a>
       </header> */}

       <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/nav" component={Nav}/>
        <Route path="/logout" component={Logout}/>
      </Switch> 
    </div>
  );
}

export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Nanosec Infotech Systems
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
