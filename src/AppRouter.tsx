import { BrowserRouter, Routes,Route } from 'react-router-dom';

import PrimarySearchAppBar from './App'
import HomePage from './pages/HomePage/HomePage';
import Hospedagem from './pages/hospedagemPage/hospedagem';
import BlueTreeTowers from './pages/hospedagemPage/Hoteis/BlueTreeTowers';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<PrimarySearchAppBar/>}/>
        <Route path='hospedagem' element={<Hospedagem/>}/>
        <Route path='istoepousada' element={<BlueTreeTowers/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
