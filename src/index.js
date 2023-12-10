import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Replace ReactDOM.render with createRoot().render
const root = createRoot(rootElement);
root.render(<App />);