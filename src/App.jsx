import React from 'react';
import MainLayout from './containers/MainLayout';
import Background3D from './components/common/Background3D';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Background3D />
        <MainLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
