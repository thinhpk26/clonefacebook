import React, {useRef} from "react";
import MenuLeft from "./MenuLeft.js";
import MenuRight from "./MenuRight.js";

const Menu = () => {
    const menuMain = useRef(null)

    const appearScroll = () => {
        menuMain.current.style.overflow = 'auto'
    }

    const disAppearScroll = () => {
        menuMain.current.style.overflow = 'hidden'
    }

    const stickyMenuRight = () => {
        const scrollValue = menuMain.current.scrollTop
        const menuRight = menuMain.current.querySelector('.menu-right')
        menuRight.style.marginTop = scrollValue + 'px' 
    }

    return (
        <div className='menu-cover stop-select'>
            <div className='menu-margin'>
                <header className='menu-head'>
                    <span className='menu-head-title allow-select'>Menu</span>
                </header>
                <main className='menu-main' onScroll={stickyMenuRight} onMouseOver={appearScroll} onMouseOut={disAppearScroll} ref={menuMain}>
                    <MenuLeft />
                    <MenuRight />
                </main>
            </div>
        </div>
    )
}

export default Menu
