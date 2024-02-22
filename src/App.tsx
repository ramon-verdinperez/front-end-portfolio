import "./App.css";
import { FaqAccordianMain } from "./faq-accordian/faq-accordian-main/faqAccordianMain.base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/navBar.base";
import { ResultsSummaryMain } from "./results-summary-component/results-summary-main/resultsSummaryMain.base";
import { SocialFeedMain } from "./interactive-comments-section/socialFeed/socialFeedMain.base";
import { CardDetailsForm } from "./card-details-form/card-details-main/card-details-form.base";
import { IpAddressTracker } from "./ip-address-tracker/ipAddressTracker.base";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/socialFeed" element={<SocialFeedMain />} />
          <Route path="/faqAccordion" element={<FaqAccordianMain />} />
          <Route
            path="/resultSummary"
            element={
              <ResultsSummaryMain
                scores={{
                  reactionScore: 80,
                  memoryScore: 90,
                  verbalScore: 61,
                  visualScore: 72,
                }}
              />
            }
          />
          <Route path="/cardDetails" element={<CardDetailsForm />} />
          <Route path="/ipAddressTracker" element={<IpAddressTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
