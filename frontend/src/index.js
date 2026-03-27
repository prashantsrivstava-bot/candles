import React from 'react';
import ReactDOM from 'react-dom/client';

// Check if root element exists (for static HTML pages, it won't)
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <div>Loading...</div>
    </React.StrictMode>
  );
}
