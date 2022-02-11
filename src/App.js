import React from'react'
import Navbar from './features/navbar/Navbar.js'
import store from './app/store'
import { Provider } from 'react-redux'
import './assets/style/styleCss/grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './features/home/Home.js';
import { useEffect } from 'react';
import { hoverElement, hoverUti} from './assets/genaral/functionGenaral';


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
        buttonMore.addEventListener('mousemove', hoverButtonMore)
      }
    })
    // hover 0.5s để hiện chú thích
    root.querySelectorAll('.appear-name-uti').forEach(element => {
      element.addEventListener('mouseenter', hoverUti(element))
    })
    // scroll bar
    const containerScroll = root.querySelectorAll('.container-scroll')
    containerScroll.forEach(element => {
      const elementToCalcHeight = element.querySelector('.duty-calc-height-scroll')
      const scrollBar = element.querySelector('.scrollbar')
      const scrollBarThumb = element.querySelector('.scrollbar-create')
      element.addEventListener('mouseenter', () => {
        scrollBar.style.backgroundColor = 'transparent'
        scrollBarThumb.style.backgroundColor = 'rgba(225, 225, 225, 0.3)'
        scrollBarThumb.style.display = 'block'
        const heightOfscrollbarThumb = Math.pow(scrollBar.offsetHeight - 16, 2) / elementToCalcHeight.offsetHeight
        scrollBarThumb.style.height = heightOfscrollbarThumb + 'px'
      })
      scrollBar.addEventListener('mouseenter', () => {
        scrollBar.style.backgroundColor = 'rgba(225, 225, 225, 0.05)'
      })
      scrollBar.addEventListener('mouseleave', () => {
        scrollBar.style.backgroundColor = 'transparent'
      })
      const heightOfscrollbarThumb = Math.pow(scrollBar.offsetHeight - 16, 2) / elementToCalcHeight.offsetHeight
      const spaceLeaveScrollBar = scrollBar.offsetHeight - heightOfscrollbarThumb
      scrollBarThumb.addEventListener('mousedown', (e) => {
          element.addEventListener('mouseleave', () => {
            scrollBarThumb.style.display = 'block'
          })
          scrollBarThumb.style.backgroundColor = 'rgba(225, 225, 225, 0.5)'
          const coordMouseDown = e.pageY
          root.addEventListener('mousemove', moveScrollBar)
          root.addEventListener('mouseup', () => {
              element.addEventListener('mouseleave', () => {
                scrollBarThumb.style.display = 'none'
              })
              scrollBarThumb.style.backgroundColor = 'rgba(225, 225, 225, 0.3)'
              root.removeEventListener('mousemove', moveScrollBar)
          })
          const heightOfscrollbarThumb = Math.pow(scrollBar.offsetHeight - 16, 2) / elementToCalcHeight.offsetHeight
          const spaceLeaveScrollBar = scrollBar.offsetHeight - heightOfscrollbarThumb
          const oldScrollBarTop = scrollBarThumb.offsetTop
          function moveScrollBar(event) {
              const clientMouseY = event.pageY;
              if(scrollBarThumb.offsetTop >= 4 && scrollBarThumb.offsetTop <= spaceLeaveScrollBar) {
                  const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                  if(clientMouseY - coordMouseDown >= 4) {
                      scrollBarThumb.style.top = oldScrollBarTop + (clientMouseY - coordMouseDown) + 'px'
                      element.scrollTop = scrollBarThumb.offsetTop * ratio
                  } else if(clientMouseY - coordMouseDown < -4) {
                      scrollBarThumb.style.top = oldScrollBarTop - (coordMouseDown - clientMouseY) + 'px'
                      element.scrollTop = scrollBarThumb.offsetTop * ratio
                  }
                  if(scrollBarThumb.offsetTop < 4) scrollBarThumb.style.top = '4px'
                  if(scrollBarThumb.offsetTop > spaceLeaveScrollBar) scrollBarThumb.style.top = spaceLeaveScrollBar - 4 +'px'
              }
          } 
      })
      element.addEventListener('scroll', (e) => {
          const scrollTop = e.target.scrollTop
          scrollBar.style.top = scrollTop + 'px'
          const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
          scrollBarThumb.style.top = e.target.scrollTop / ratio + 'px'
          if(scrollBarThumb.offsetTop < 4) scrollBarThumb.style.top = '4px'
          if(scrollBarThumb.offsetTop > spaceLeaveScrollBar) scrollBarThumb.style.top = spaceLeaveScrollBar - 4 +'px'
      })
      scrollBar.addEventListener('mousedown', (e) => {
        if(e.target.matches('.scrollbar')) {
            const clientY = e.clientY - 58
            if(clientY > scrollBarThumb.offsetTop) {
                const scrollingThumb = setInterval(() => {
                    const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                    scrollBarThumb.style.top = scrollBarThumb.offsetTop + 1 + 'px'
                    element.scrollTop = scrollBarThumb.offsetTop * ratio

                }, 5)
                scrollBar.addEventListener('mouseup', () => {
                    clearInterval(scrollingThumb)
                })
                scrollBar.addEventListener('mouseleave', () => {
                    clearInterval(scrollingThumb)
                })
            } else {
                const scrollingThumb = setInterval(() => {
                    const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                    scrollBarThumb.style.top = scrollBarThumb.offsetTop - 1 + 'px'
                    element.scrollTop = scrollBarThumb.offsetTop * ratio

                }, 5)
                scrollBar.addEventListener('mouseup', () => {
                    clearInterval(scrollingThumb)
                })
                scrollBar.addEventListener('mouseleave', () => {
                    clearInterval(scrollingThumb)
                })
            }
        }
      })
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

