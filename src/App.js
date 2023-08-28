import './App.css';
import Header from './Components/Header/Header';
import Nav from "./Components/Nav/Nav"
import Main from './Pages/Main';

function App() {
  return (
    <div className="app">
      <Header/>
        <div className='container d-flex mt-2 justify-content-around'>
          <div className='col-3 nav-menu'>
            <Nav/>
          </div>
          <div className='col-8 main'>
            <Main/>
          </div>
        </div>
    </div>
  );
}

export default App;
