import './App.css';
import ProgressbarDemo from './pages/ProgressbarDemo';
import ProgressProvider from './context/ProgressContext';

function App() {
  return (
    <div className="App">
      <ProgressProvider>
        <ProgressbarDemo></ProgressbarDemo>
      </ProgressProvider>
    </div>
  );
}

export default App;
