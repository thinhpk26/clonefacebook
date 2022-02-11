import React from "react";
import { getParent } from "../../../../assets/genaral/functionGenaral";
import { BsClock, BsX } from "react-icons/bs";
import './hashisScss.scss'

const HistoryItem = ({index, des, deleteItem}) => {
    return (
        <li data-key={index} className='hisItem'>
            <div className='hisItem-icon'>
                <BsClock className='icon-nohis'/>
            </div>
            <div className='hisItem-discription'>
                <h2>{des}</h2>
            </div>
            <div className='clear-hisItem' onClick={deleteItem}>
                <BsX className='clear-hisItem-icon'/>
            </div>
        </li>)
}

const HasHis = (props) => {
    const {history} = props

    const deleteItem = (e) => {
        const historyItem = getParent(e.target, '.hisItem').getAttribute('data-key')
        const remainItem = history.filter((item, index) => {
            return index !== parseInt(historyItem)
        })
        props.deleteHisItem(remainItem)
    }

    const HistoryItems = history.map((hisItem, index) => <HistoryItem key={index} index={index} des={hisItem.des} deleteItem={deleteItem} />)
    
    return (
        <div className='hashistory'>
            <header className='header-history'>
                <h1>Tìm kiếm gần đây</h1>
                <div className='hover-edit'>
                    <p>Chỉnh sửa</p>
                </div>
            </header>
            <main className='main-history'>
                <ul className='history-list'>
                    {HistoryItems}
                </ul>
            </main>
        </div>
    )
}

export default HasHis