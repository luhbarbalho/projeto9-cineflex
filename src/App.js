
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Start from './Start'
import Timetable from './Timetable';
import Seats from './Seats';
import Success from './Success';


export default function App() {

    const [confirmation, setConfirmation] = useState("");
    const [movies, setMovies] = useState([]);

    const [schedules, setSchedules] = useState([]);

    // Todo o App deve estar dentro de BrowserRouter

    return (
        
        <BrowserRouter>
            
            <Header />
            {/* Tudo que tiver uma rota tem q estar dentro de Routes */}
            <Routes>
                {/* Toda rota tem q estar dentro de Route */}
                <Route path="/" element={<Start movies={movies} setMovies={setMovies} />}/>

                <Route path="/sessoes/:idFilme" element={<Timetable schedules={schedules} setSchedules={setSchedules} />}/>

                <Route path="/assentos/:idSessao" element={<Seats completed={(confirmation) => setConfirmation(confirmation)} schedules={schedules} />}/>

                <Route path="/sucesso" element={<Success confirmation={confirmation} />}/>

            </Routes>
        </BrowserRouter>
    );
}