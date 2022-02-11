import { configureStore } from '@reduxjs/toolkit'
import { messageSlice } from '../features/navbar/rightNav/messager/messageSlice'
import notifyReducer from '../features/navbar/rightNav/notify/notifySlice'

export default configureStore({
  reducer: {
    messageReducer: messageSlice.reducer,
    notifyReducer,
  }
})