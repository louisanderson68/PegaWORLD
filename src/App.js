import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Agenda from './components/Agenda';
import DayView from './components/DayView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  return (
      <div className="app__container">
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Agenda />} />
              <Route path="/day/:day" element={<DayView />} />
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
