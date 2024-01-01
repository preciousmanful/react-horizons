import { Route, Routes } from 'react-router-dom';
import './App.css';
import DesktopNavbar from './component/DesktopNavbar';
import './component/pages/css/bootstrap.css';
import { Home, Offsetting, Nesting, Blog } from './component/pages';


function App() {
  return (
    <div className="App">
      <DesktopNavbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/nesting' element={<Nesting/>} />
        <Route path='/offsetting' element={<Offsetting/>} />
      </Routes>
    </div>
  );
}

export default App;
