import {configureStore, combineReducers, PayloadAction} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {HYDRATE, createWrapper} from 'next-redux-wrapper'
import counterSlice from './slices/counterSlice'
import allRoomsSlice from './slices/allRoomsSlice'

const combineReducer = combineReducers({
    counter: counterSlice,
    allRooms: allRoomsSlice
})

const reducer = (state: any, action: PayloadAction<any>) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return combineReducer(state, action)
    }
}


const initStore = () => {
    return configureStore({
        reducer
    })
}

type Store = ReturnType<typeof initStore>
export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper(initStore, {
    debug: true
})
