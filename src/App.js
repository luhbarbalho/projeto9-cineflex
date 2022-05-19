import {useState} from 'react';
import Header from './Header';
import Start from './Start'
import Timetable from './Timetable'

export default function App() {

    const [visible, setVisible] = useState(true);

    return (
        <>
            <Header />
            { visible ? <Start setVisible={setVisible}/> : <Timetable />}
        </>
    );
}