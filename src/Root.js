import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import App from './App'
import ListePassages from './ListePassages'

export const Root = () => {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path="/Avis" element={<ListePassages />}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}
