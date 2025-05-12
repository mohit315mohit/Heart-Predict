// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter} from 'react-router-dom';
// import './index.css';
// // import Login from './pages/login.jsx';
// // import Signup from './pages/Signup.jsx';
// // import Home from './pages/Home.jsx';
// import App from './App.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App/>
//     </BrowserRouter>
//   </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap it ONCE here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
