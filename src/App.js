import {useState} from 'react';
import Header from './Header';
import Start from './Start'
import Timetable from './Timetable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    const [visible, setVisible] = useState(true);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Header />
                    { visible ? <Start setVisible={setVisible}/> : <Timetable />}
                </Routes>
            </BrowserRouter>
            
        </>
    );
}