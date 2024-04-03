import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NoPage from './components/NoPage';
import LoginForm from './components/client/LoginForm';
import RegisterForm from './components/client/RegisterForm';
import DisplayClient from './components/client/DisplayClient';
import Profile from './components/client/Profile';
import UpdateClient from './components/client/UpdateClient';
import Hall from './components/client/Hall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/login' element={<LoginForm />}></Route>
            <Route path='/register' element={<RegisterForm />}></Route>
            <Route path='/hall' element={<Hall />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/updateClient' element={<UpdateClient />}></Route>
            <Route path="/client/:id" element={<DisplayClient />} />
            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}
export default App;