import React, { useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componenets/home';
import About from './componenets/about';
import { AppContext } from './Context';
import Counter from './componenets/Counter';
import Counter2 from './componenets/Counter2';
import Atlas from './componenets/Atlas/Atlas';
import Pixabay from './componenets/Pixabay.jsx/Pixabay';
import Billionaires from './componenets/Billionaires/Billionaires';
function AppRoutes() {
    const [number, SetNumber] = useState(6);
    const [coins, SetCoins] = useState(33);
    const [counter, SetCounter] = useState(0);

    return (
        <BrowserRouter>
            <AppContext.Provider value={
                {
                    val: "koko6",
                    number, SetNumber,
                    coins, SetCoins,
                    counter, SetCounter
                }
            }>
                <header className='p-2 container bg-info'>
                    <div>
                        {coins}
                    </div>
                    <Link to="/">home</Link> |
                    <Link to="/about">about</Link> |
                    <Link to="/counter">counter</Link> |
                    <Link to="/counter2">counter2</Link> |
                    <Link to="/atlas">atlas</Link> |
                    <Link to="/pixa/cats">pixa</Link> |
                    <Link to="/Billionaires">Billionaires</Link> 
                </header>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route index element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/counter' element={<Counter/>}></Route>
                    <Route path='/counter2' element={<Counter2/>}></Route>
                    <Route path='/atlas' element={<Atlas/>}></Route>
                    <Route path='/pixa/cats' element={<Pixabay/>}></Route>
                    <Route path='/Billionaires' element={<Billionaires/>}></Route>
                </Routes>
            </AppContext.Provider>
            <footer className='p-2 container bg-danger'>footer</footer>
        </BrowserRouter>
    )
}

export default AppRoutes