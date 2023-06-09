import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskContextProvider } from './context/TaskContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
