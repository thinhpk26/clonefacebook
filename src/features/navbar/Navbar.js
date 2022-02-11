import React from "react"
import CenterNav from "./centerNav/Centernav.js"
import Leftnav from "./leftNav/Leftnav.js"
import Rightnav from "./rightNav/Rightnav.js"

const Navbar = () => {
    return(
        <nav className='navbar-cover navbar-expand-md'>
            <div className='container-fluid px-3 w-100 h-100'>
                <div className='navbar py-0 h-100'>
                    <Leftnav />
                    <CenterNav/>
                    {/* để resposive sau */}
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#main-nav" aria-expanded="false">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <Rightnav/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar