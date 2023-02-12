import { configureStore } from '@reduxjs/toolkit'
import Userslice from './UserSlice/Userslice'
export const store = configureStore({
  reducer: {
    user: Userslice
  },
})