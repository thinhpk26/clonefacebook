import { configureStore } from '@reduxjs/toolkit'
import { messageSlice } from '../slice/navbar/rightNav/messager/messageSlice'
import notifyReducer from '../slice/navbar/rightNav/notify/notifySlice'

export default configureStore({
  reducer: {
    messageReducer: messageSlice.reducer,
    notifyReducer,
  }
})