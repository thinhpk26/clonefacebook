import React, {useRef} from "react";
import { getParent } from "../../../functionGenaral";
import './centerScss.scss'
import {IoHomeOutline, IoHomeSharp, IoFlagOutline, IoFlagSharp, IoTvOutline, IoTv, IoPeopleCircleOutline, IoPeopleCircle, IoGridOutline, IoGrid} from "react-icons/io5"

const UICenter = [
    {
      name: 'Trang chủ',
      icon: {
        iconNoActive: <IoHomeOutline className='utility' />,
        iconActive: <IoHomeSharp className='utility-active' />,
      }
    },
    {
      name: 'Trang',
      icon: {
        iconNoActive: <IoFlagOutline className='utility' />,
        iconActive: <IoFlagSharp className='utility-active' />,
      }
    },
    {
      name: 'Video',
      icon: {
        iconNoActive: <IoTvOutline className='utility' />,
        iconActive: <IoTv className='utility-active' />,
      }
    },
    {
      name: 'Nhóm',
      icon: {
        iconNoActive: <IoPeopleCircleOutline className='utility' />,
        iconActive: <IoPeopleCircle className='utility-active' />,
      }
    },
    {
      name: 'Trò chơi',
      icon: {
        iconNoActive: <IoGridOutline className='utility' />,
        iconActive: <IoGrid className='utility-active' />,
      }
    },
]

const UtiItem = ({pageActive, Uti: {name, icon: {iconNoActive, iconActive}}}) => {
    if(name === 'Trang chủ') {
        return (
            <li className='nav-utility-item page-current col'>
                <div className='use-underline d-flex justify-content-center align-items-center w-100 h-100'>
                    <div onClick={pageActive} className='utility-item--hover d-flex justify-content-center align-items-center w-100 position-relative'>
                        {iconNoActive}
                        {iconActive}
                        <span className='noted centernote'>{name}</span>
                    </div>
                </div>
            </li>
        )
    } else {
        return (
            <li className='nav-utility-item col'>
                <div className='use-underline d-flex justify-content-center align-items-center w-100 h-100'>
                    <div onClick={pageActive} className='utility-item--hover d-flex justify-content-center align-items-center w-100 position-relative'>
                        {iconNoActive}
                        {iconActive}
                        <span className='noted centernote'>{name}</span>
                    </div>
                </div>
            </li>
        )
    }
    
}


const CenterNav = () => {
    const containerUties = useRef(null)

    // không được sử dụng current ở sau useRef ngay lập tức
    // how to use ref to element
    const handleUti = () => {
        const pageActive = (e) => {
            containerUties.current.querySelectorAll('.nav-utility-item').forEach(function(uti) {
                uti.classList.remove('page-current')
            })
            const targeted = e.target
            const utilityItem = getParent(targeted, '.nav-utility-item')
            utilityItem.classList.add('page-current')
        }
        return {pageActive}
    }

    const navUtiItems = UICenter.map((Uti, index) => (<UtiItem key={index} pageActive={handleUti().pageActive} Uti={Uti}/>))

    return(
        <section className='centernav h-100 appear-name-uti'>
            <ul className='row gx-2 h-100 my-0 p-0' ref={containerUties}>
                {navUtiItems}
            </ul>
        </section>
    )
} 

export default CenterNav