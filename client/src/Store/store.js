import { configureStore } from '@reduxjs/toolkit'
import PickupSlice from './PickupSlice/PickupSlice'
import Userslice from './UserSlice/Userslice'
export const store = configureStore({
  reducer: {
    user: Userslice,
    pickup: PickupSlice
  },
})