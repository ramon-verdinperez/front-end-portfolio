import "./App.css";
import { FaqAccordianMain } from "./faq-accordian/faq-accordian-main/faqAccordianMain.base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/navBar.base";
import { ResultsSummaryMain } from "./results-summary-component/results-summary-main/resultsSummaryMain.base";
import { SocialFeedMain } from "./interactive-comments-section/socialFeed/socialFeedMain.base";
import { CardDetailsForm } from "./card-details-form/card-details-main/card-details-form.base";
import { IpAddressTracker } from "./ip-address-tracker/ipAddressTracker.base";
import { AboutMe } from "./about-me/aboutMe.base";
import { ExampleComponents } from "./example-components-page/exampleComponents.base";

function App() {
  
  const base = "/front-end-portfolio";

  return (
    <Router>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path={`${base}/`} element={<AboutMe />} />
          <Route path={`${base}/faqAccordion`} element={<FaqAccordianMain />} />
          <Route
            path={`${base}/resultSummary`}
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
          <Route path={`${base}/cardDetails`} element={<CardDetailsForm />} />
          <Route path={`${base}/ipAddressTracker`} element={<IpAddressTracker />} />
          <Route path={`${base}/socialFeed`} element={<SocialFeedMain />} />
          <Route path={`${base}/exampleComponents`} element={<ExampleComponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
