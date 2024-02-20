import './App.css';
import { FirstScreen } from './components/main/FirstScreen';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { SecondScreen } from "./components/main/SecondScreen";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<FirstScreen />} />
                <Route path="/pedido/:id" element={<SecondScreen />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
