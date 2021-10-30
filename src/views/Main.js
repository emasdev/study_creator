import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';
import Dashboard from './Dashboard';

export default function Main(props) {
  const auth = useAuth();

  return <>{auth.isLoading ? <Loading /> : <Dashboard />}</>;
}

// function MyRouter() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/estudios">Estudios</Link>
//             </li>
//             <li>
//               <Link to="/estudios/subir">Subir estudio</Link>
//             </li>
//             <li>
//               <Link to="/agenda">Agenda</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/estudios">
//             <Estudios />
//           </Route>
//           <Route path="/estudios/subir">
//             <Users />
//           </Route>
//           <Route path="/agenda">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Estudios() {
//   return <h2>Estudios</h2>;
// }

// function SubirEstudio() {
//   return <h2>SubirEstudio</h2>;
// }

// function Agenda() {
//   return <h2>Agenda</h2>;
// }
