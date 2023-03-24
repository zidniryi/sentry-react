import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

Sentry.init({
  // Change with your key api
  dsn: "https://d6a0f2db354645bdb94c9a8310e65cb1@o4504834911502336.ingest.sentry.io/4504887114596352",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
