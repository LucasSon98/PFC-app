import HomePage from './pages/home/App';
import ConfigPage from './pages/config/App';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import io from 'socket.io-client';
import { Server } from './context';

const App = () => {
    const socket = io.connect("http://localhost:3001");

    return (
        <Server.Provider value={{socket}}>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/config' element={<ConfigPage/>}/>
                    <Route path='*' element={<Navigate to='/' replace/>}/>
                </Routes>
            </Router>
        </Server.Provider>
                
    );
}
 
export default App;