import './App.css';
import Header from './pages/Header/Header.js';
import Home from './pages/Home/Home.js';
import Project from './pages/Project/Project.js';
import Blog from './pages/Blog/Blog.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Footer from './pages/Footer/Footer.js';
import { HashRouter as Router ,
  Routes,
  Route,} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}


export default App;
