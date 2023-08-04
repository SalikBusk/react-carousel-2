import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './Pages/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/about",
    element: <div>Hello World</div>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
