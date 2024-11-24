import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Expenses from './pages/Expenses';
import { useAppSelector } from './redux/hooks';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const {token} = useAppSelector(state => state.auth)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path='login' element={<Login/>}/>
        <Route path='signUp' element={<SignUp/>}/>     
        <Route index element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='categories' element={
          <ProtectedRoute>
            <Categories/>
          </ProtectedRoute>
        }/>
        <Route path='expenses' element={
          <ProtectedRoute>
            <Expenses/>
          </ProtectedRoute>
        }/>
      </Route>
    )
  );
  return (
    <>
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
