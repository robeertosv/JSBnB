import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
//import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App