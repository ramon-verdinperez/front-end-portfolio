import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FaqAccordianMain } from './faq-accordian/faq-accordian-main/faqAccordianMain.base';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FaqAccordianMain />
  </React.StrictMode>
);