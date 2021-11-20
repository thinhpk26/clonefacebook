import React from'react'
import Navbar from './slice/navbar/Navbar.js'
import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './slice/home/Home.js';
import { useEffect } from 'react';
import { hoverElement, hoverUti, disOrAppearScroll, elementScroll } from './functionGenaral.js';


const Appface = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    // tạo ra event cho tất cả các element có chung class
    root.querySelectorAll('.element-hover').forEach(element => {
      const buttonMore = element.querySelector('.button-more')
      const event = hoverElement(element, buttonMore)
      const hoverElementItem = event.hoverElementItem
      const hoverOutElementItem = event.hoverOutElementItem
      const hoverButtonMore = event.hoverButtonMore
      const hoverOutButtonMore = event.hoverOutButtonMore
      element.addEventListener('mouseleave', hoverOutElementItem)
      element.addEventListener('mouseenter', hoverElementItem)
      if(buttonMore) {
        buttonMore.addEventListener('mouseleave', hoverOutButtonMore)
        buttonMore.addEventListener('mouseenter', hoverButtonMore)
      }
    })
    root.querySelectorAll('.appear-name-uti').forEach(element => {
      element.addEventListener('mouseenter', hoverUti(element))
    })
    root.querySelectorAll('.container-scroll').forEach(element => {
      const dragScrollAppear = elementScroll(element, '.scrollbar', [336, 358])
      const appearScroll = disOrAppearScroll(element).appearScroll
      const disAppearScroll = disOrAppearScroll(element).disAppearScroll
      //  onMouseOver={appearScroll} onMouseOut={disAppearScroll} onMouseMove={dragScrollAppear}
      element.addEventListener('mouseover', appearScroll)
      element.addEventListener('mouseout', disAppearScroll)
      element.addEventListener('mousemove', dragScrollAppear)
    })
  })

  return(
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Home />
        </>
      </Router>
    </Provider>
  )
}

export default Appface

