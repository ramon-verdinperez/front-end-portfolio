import './App.css';
import { FaqAccordianMain } from './faq-accordian/faq-accordian-main/faqAccordianMain.base';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar/navBar.base';

function App() {
  return (
    <Router>
    <div className="nav">
      <NavBar />
    </div>
    <div className="App">
      <Routes>
        <Route path="/faqAccordion" element={<FaqAccordianMain />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
