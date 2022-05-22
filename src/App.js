// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Start from './Start'
import Timetable from './Timetable';
import Seats from './Seats';
import Footer from './Footer';


export default function App() {

    // const [visible, setVisible] = useState(true);

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

                <Route path="/assentos/:idSessao" element={<Seats />}/>

                {/* { visible ? <Start setVisible={setVisible}/> : <Timetable />} */}

            </Routes>
        </BrowserRouter>
    );
}