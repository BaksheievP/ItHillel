import logo from './logo.svg';
import './App.css';
import Todos from './modules/todos/components/ToDos';
import Users from './modules/users/Users';
import Posts from './modules/posts/Posts';
import Gallery from './modules/gallery/components/gallery';
import { useState } from 'react';
import Navigation from './modules/common/components/Navigation';
function App() {
  const [currentPath, setcurrentPath] = useState('gallery')
  return (
    <>
    <Navigation currentPath ={currentPath} navigate={setcurrentPath}/>
    {currentPath === 'todos' ? <Todos/> : null}
    {currentPath === 'users' ? <Users/> : null}
    {currentPath === 'posts' ? <Posts/> : null}
    {currentPath === 'gallery' ? <Gallery/> : null}
    </>
  );
}

export default App;
