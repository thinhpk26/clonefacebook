import { createSlice } from "@reduxjs/toolkit";
import img1 from './img_notify/a1.jpg'
import img2 from './img_notify/a2.jpg'
import img3 from './img_notify/a3.jpg'
import img4 from './img_notify/a4.jpg'
import img5 from './img_notify/a5.jpg'
import img6 from './img_notify/a6.jpg'
import img7 from './img_notify/a7.jpg'
import img8 from './img_notify/a8.jpg'
import img9 from './img_notify/a9.jpg'
import img10 from './img_notify/a10.jpg'
// lấy từ trên server về - sẽ làm sau
const initialNotify = {
    lastest: [
        {
            img: img1,
            relativeSocial: 'group',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
        {
            img: img2,
            relativeSocial: 'person',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: '',
            },
            isRead: false, 
        },
        {
            img: img3,
            relativeSocial: 'watch',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
        {
            img: img4,
            relativeSocial: 'img',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
        {
            img: img5,
            relativeSocial: 'chat',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
    ],
    before: [
        {
            img: img6,
            relativeSocial: 'group',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: true, 
        },
        {
            img: img7,
            relativeSocial: 'person',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: '',
            },
            isRead: false, 
        },
        {
            img: img8,
            relativeSocial: 'watch',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
        {
            img: img9,
            relativeSocial: 'img',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: true, 
        },
        {
            img: img10,
            relativeSocial: 'chat',
            des: {
                user: 'Nguyễn Phạm Tú Uyên',
                action: 'đã thêm 1 ảnh mới',
                relative: 'Gentle',
                content: 'IG: @nguyenphamtuuyen',
            },
            isRead: false, 
        },
    ],
}

export const notifySlice = createSlice({
    name: 'notify',
    initialState: initialNotify,
    reducers: {
        isRead: (state, action) => {
            const section = action.payload.section
            const element = action.payload.element
            if(!action.payload.isRead)
                state[section][element].isRead = true
            return state
        }
    }
})

export const notifyActions = notifySlice.actions

export default notifySlice.reducer