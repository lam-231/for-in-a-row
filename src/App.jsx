
import './App.css';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import { Routes, Route } from 'react-router-dom';
import ScoreboardPage from './pages/ScoreboardPage';
import CookieConsent from "react-cookie-consent";

function App() {
    return (
        <div className="App">
            <h1>Гра 4 в ряд</h1>

            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/game/:userId" element={<GamePage />} />
                <Route path="/scoreboard" element={<ScoreboardPage />} />
            </Routes>


            <CookieConsent
                location="top"
                buttonText="Зрозуміло та згоден"
                declineButtonText="Відмовитись"
                enableDeclineButton
                cookieName="fourInARowGDPR"
                style={{
                    background: "black",
                    border: "1px solid gray",
                    alignItems: "center",
                    zIndex: 9999,
                    width: "auto",
                    maxWidth: "800px",
                    margin: "20px auto",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
                buttonStyle={{ background: "green", color: "white", fontSize: "14px", borderRadius: "6px", fontWeight: "bold", padding: "8px 16px" }}
                declineButtonStyle={{ background: "transparent", color: "red", fontSize: "14px", border: "1px solid red", borderRadius: "6px", padding: "8px 16px" }}
                expires={150}
            >
                Ця гра використовує файли cookie та локальне сховище (localStorage) для збереження ваших налаштувань та історії матчів згідно з GDPR.{" "}
                <a href="/privacy-policy.html" target="_blank" rel="noreferrer" style={{ color: "blue", textDecoration: "none", marginLeft: "10px" }}>
                    Детальніше (Privacy Policy)
                </a>
            </CookieConsent>

        </div>
    );
}

export default App;