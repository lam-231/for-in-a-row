
import './App.css';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>Гра 4 в ряд</h1>

            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/game/:userId" element={<GamePage />} />
            </Routes>

        </div>
    );
}

export default App;