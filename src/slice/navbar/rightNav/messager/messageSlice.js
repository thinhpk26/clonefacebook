import { createSlice } from '@reduxjs/toolkit'
import img1 from './img_mess/img1.jpg'
import img2 from './img_mess/img2.jpg'
import img3 from './img_mess/img3.jpg'
import img4 from './img_mess/img4.JPG'
import img5 from './img_mess/img5.jpg'
import img6 from './img_mess/img6.jpg'
import img7 from './img_mess/img7.jpg'
import img8 from './img_mess/img8.jpg'
import img9 from './img_mess/img9.jpg'
import img10 from './img_mess/img10.jpg'

const data = [
    {
        imgMess: img1,
        desMess: {
            active: true,
            nameMess: 'IT Suppoter gen 7',
            personSend: 'Đạt 3000 Elo',
            contentMess: 'à Hình như là thế này',
            timeMess: '2 phút',
            state: 'everRead',
            isRead: false,
        },
    },
    {
        imgMess: img2,
        desMess: {
            active: false,
            nameMess: 'Hội trai xinh, gái đẹp:3',
            personSend: 'Hà Thu',
            contentMess: 'đã rời khỏi nhóm',
            timeMess: '16 phút',
            state: 'notifyOff',
            isRead: true,
        },
    },
    {
        imgMess: img3,
        desMess: {
            active: true,
            nameMess: 'CNTT 01',
            personSend: 'Linh mõm',
            contentMess: 'cảm ơn nhé',
            timeMess: '1 giờ',
            state: 'seen',
            isRead: true,
        },
    },
    {
        imgMess: img4,
        desMess: {
            active: false,
            nameMess: 'Nguyễn Huy',
            personSend: 'Bạn',
            contentMess: 'ừ đến đây',
            timeMess: '1 giờ',
            state: 'friendSeen',
            isRead: true,
        },
    },
    {
        imgMess: img5,
        desMess: {
            active: false,
            nameMess: 'Trần Thị Thủy',
            personSend: '',
            contentMess: 'Trên hệ thống dài vc',
            timeMess: '1 giờ',
            state: 'seen',
            isRead: true,
        },
    },
    {
        imgMess: img6,
        desMess: {
            active: false,
            nameMess: 'Sơn Văn Nguyễn',
            personSend: '',
            contentMess: 'Để dky',
            timeMess: '5 giờ',
            state: 'seen',
            isRead: true,
        },
    },
    {
        imgMess: img7,
        desMess: {
            active: false,
            nameMess: 'Trịnh Dương Nhật',
            personSend: '',
            contentMess: 'Đoạn chat video đã kết thúc',
            timeMess: '5 giờ',
            state: 'sendSuccess',
            isRead: true,
        },
    },
    {
        imgMess: img8,
        desMess: {
            active: false,
            nameMess: 'Ko nhắn linh tinh nhá Thịnh',
            personSend: 'Bạn',
            contentMess: 'Tùy mày vậy',
            timeMess: '6 giờ',
            state: 'friendSeen',
            isRead: true,
        },
    },
    {
        imgMess: img9,
        desMess: {
            active: false,
            nameMess: 'Nguyễn Văn Thinh',
            personSend: 'Bạn',
            contentMess: 'hình ảnh',
            timeMess: '2 giờ',
            state: 'sent',
            isRead: true,
        },
    },
    {
        imgMess: img10,
        desMess: {
            active: true,
            nameMess: 'Quốc Chung',
            personSend: 'Bạn',
            contentMess: 'Ừ thế thì thôi vậy',
            timeMess: '6 giờ',
            state: 'friendSeen',
            isRead: true,
        },
    },
]

export const messageSlice = createSlice({
    name: 'counter',
    initialState: data,
    reducers: {
        isRead(state, action) {
            if(action.payload.isRead === false) {
                const element = action.payload.element
                state[element].desMess.isRead = true
                return state
            }
            else return state
        }
    }
})

export default messageSlice.reducer