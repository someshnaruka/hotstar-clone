import './App.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';//Switch replaced by Routes in Router-v6
import Login from "./components/Login";
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
