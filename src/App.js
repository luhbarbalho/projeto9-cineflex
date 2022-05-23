// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Start from './Start'
import Timetable from './Timetable';
import Seats from './Seats';
import Footer from './Footer';
import Success from './Success';


export default function App() {

    const [confirmation, setConfirmation] = useState("");

    // Todo o App deve estar dentro de BrowserRouter

    return (
        
        <BrowserRouter>
            
            <Header />
            {/* Tudo que tiver uma rota tem q estar dentro de Routes */}
            <Routes>
                {/* Toda rota tem q estar dentro de Route */}
                <Route path="/" element={<Start />}/>

                <Route path="/sessoes/:idFilme" element={<Timetable />}/>

                <Route path="/sessoes/:idFilme" element={<Footer />}/>

                <Route path="/assentos/:idSessao" element={<Seats completed={(confirmation) => setConfirmation(confirmation)} />}/>

                <Route path="/sucesso" element={<Success confirmation={confirmation}/>}/>

            </Routes>
        </BrowserRouter>
    );
}