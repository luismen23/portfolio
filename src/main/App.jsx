import React, { useState } from 'react'
import { Link, Route } from "wouter";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

function App() {

  return (
    <div className="font-Sarabun dark:bg-color2">
      <Route path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Skills' component={Skills} />
      
    </div>
  )
}

export default App
