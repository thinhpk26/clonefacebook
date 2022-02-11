import React from "react";
import { IoEllipsisHorizontal} from "react-icons/io5";
import NotifyItem from "./NotifyItems";
import { useSelector } from "react-redux";

const Notify = () => {
    const dataNotify = useSelector((state => state.notifyReducer))
    const renderNotifyLastest = dataNotify.lastest.map((item, index) => <NotifyItem key={index} item={item} element={{element: index, section: 'lastest'}} />)
    const renderNotifyBefore = dataNotify.before.map((item, index) => <NotifyItem key={index} item={item} element={{element: index, section: 'before'}} />)
    return(
        <div className='notify-detail position-absolute container-scroll'>
            <div className='duty-calc-height-scroll'>
                <header className='notify-head d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <h4 className='fw-bold text-color-pr'>Thông báo</h4>
                    <div className='notify-toggle rounded-circle d-flex justify-content-center align-items-center'>
                        <IoEllipsisHorizontal className='lead' />
                    </div>
                </header>
                <main className='notify-main'>
                    <section className='notify-lastest'>
                        <header className='notify-lastest-head d-flex justify-content-between align-items-center mx-3 mt-3'>
                            <h5 className='fw-bold m-0 text-color-pr'>Mới</h5>
                            <button className='notify-lastest-all btn text-primary btn-face-primary'>Xem tất cả</button>
                        </header>
                        <main className='notify-lastest-main'>
                            {renderNotifyLastest}
                        </main>
                    </section>
                    <section className='notify-before'>
                        <header className='notify-lastest-head d-flex justify-content-between align-items-center mx-3 mt-3'>
                            <h5 className='fw-bold m-0 text-color-pr'>Trước đó</h5>
                            <button className='notify-lastest-all btn text-primary btn-face-primary'>Xem tất cả</button>
                        </header>
                        <main className='notify-before-main'>
                            {renderNotifyBefore}
                        </main>
                    </section>
                </main>
            </div>
            <div className='scrollbar scrollbar-notify'>
                <div className='scrollbar-create'></div>
            </div>
        </div>
    )
}

export default Notify