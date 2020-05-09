// import React from "react";
// import { slide as Menu } from "react-burger-menu";

// export default props => {
//   return (
//     // Pass on our props
//     <Menu {...props}>
//       <a className="menu-item" href="/">
//         Home
//       </a>

//       <a className="menu-item" href="/burgers">
//         Burgers
//       </a>

//       <a className="menu-item" href="/pizzas">
//         Pizzas
//       </a>

//       <a className="menu-item" href="/desserts">
//         Desserts
//       </a>
//     </Menu>
//   );
// };


//***************** */

import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <br></br>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>
      <br></br>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <br></br>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
      <br></br>
    </Menu>
  );
};