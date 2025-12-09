import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';

function App() {
    const [currentView, setCurrentView] = useState('start');

    const handleStartGame = () => {
        setCurrentView('game');
    };

    const handleEndGame = () => {
        setCurrentView('start');
    };


    return (
        <div className="App">
            <h1>Гра 4 в ряд</h1>

            {currentView === 'start' && (
                <StartPage onStart={handleStartGame} />
            )}

            {currentView === 'game' && (
                <GamePage onEndGame={handleEndGame} />
            )}

        </div>
    );
}

export default App;