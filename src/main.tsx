import ReactDom from 'react-dom/client';
import React from 'react';

ReactDom.createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
  <React.StrictMode>
    <h1>hello!</h1>
    <p>My iframe is below:</p>
    <iframe src="/my_iframe.html" width="100%" height="700px"></iframe>
  </React.StrictMode>
);
