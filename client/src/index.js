import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Transaction from './views/Transaction/Transaction';


const router =createBrowserRouter ([{
    path : "/",
    element : <Home/>
},
{
    path : "/signup",
    element : <Signup/>
},
{
  path :"/login",
  element : <Login/>
},
{
  path :"/transaction",
  element : <Transaction/>
}]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < RouterProvider  router={router}/>
);
