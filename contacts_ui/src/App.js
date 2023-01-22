import Header from './modules/common/components/Header';
import { Container } from '@mui/system';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './modules/home/pages/Home';
import UsersModules from './modules/users/pages/UsersModules';
import UsersList from './modules/users/pages/UsersList';
import UsersForm from './modules/users/pages/UsersForm';

function App() {
  return (
    <Container maxWidth="sm">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<UsersModules />}>
          <Route path='' element={<UsersList />} />
          <Route path=':id' element={<UsersForm />} />
        </Route>
      </Routes>
    </Container>
  )
}
export default App;
