import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Posts';
import Projects from './components/Projects';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return(
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path = '/' exact/>
        <Route component={About} path = '/About'/>
        <Route component={SinglePost} path = '/post/:slug'/>
        <Route component={Post} path = '/post'/>
        <Route component={Projects} path = '/projects'/>
      </Switch>
       <Footer/>
    </BrowserRouter>
   
  ) 
}

export default App;
