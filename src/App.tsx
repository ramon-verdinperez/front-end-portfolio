import "./App.css";
import { FaqAccordianMain } from "./faq-accordian/faq-accordian-main/faqAccordianMain.base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/navBar.base";
import { ResultsSummaryMain } from "./results-summary-component/results-summary-main/resultsSummaryMain.base";

function App() {
  return (
    <Router>
      <div className="nav">
        <NavBar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/faqAccordion" element={<FaqAccordianMain />} />
          <Route
            path="/resultSummary"
            element={<ResultsSummaryMain scores={{ reactionScore: 80, memoryScore: 90, verbalScore: 61, visualScore: 72}} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
