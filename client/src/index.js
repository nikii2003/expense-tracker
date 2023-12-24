import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import AddTransaction from './views/AddTransaction/AddTransaction';
import TransactionDetails from './views/TransactionDetails/TransactionDetails.js';
import Debit from './views/Debit/Debit.js';
import Credit from './views/Credit/Credit.js';
import AllTransaction from './views/AllTransaction/AllTransaction.js'

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
  path :"/addtransaction",
  element : <AddTransaction/>
},
{
  path : "/transactiondetail",
  element : <TransactionDetails/>
},
{
  path : "/debit",
  element : <Debit/>
},
{
  path : "/credit",
  element : <Credit/>
},
{
  path : '/alltransaction',
  element : <AllTransaction/>
}

]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < RouterProvider  router={router}/>
);
