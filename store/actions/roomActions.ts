import { IncomingMessage } from 'http'
import {setAllRoomsFail, setAllRoomsSuccess} from '../slices/allRoomsSlice'
import { setRoomDetailSuccess } from '../slices/roomDetailSlice'

export const getRooms = (req: IncomingMessage, currentPage = '1') => async(dispatch: Function) => {
    try {

       let link = `http://localhost:8000/api/v1/rooms?page=${currentPage}`
       const res = await fetch(link)
       const data = await res.json()

        dispatch(setAllRoomsSuccess({
            ...data
        }))

    } catch (error: any) {
       dispatch(setAllRoomsFail({
           payload: error.response.data.message
       }))
    }
}

export const getRoomDetails = (id: string) => async(dispatch: Function) => {
    try {
       const res = await fetch(`${process.env.API_URL}/rooms/${id}`)
       const data = await res.json()
       dispatch(setRoomDetailSuccess(data.room))
    } catch (error: any) {
        dispatch(setAllRoomsFail({
            payload: error.response.data.message
        }))
    }
}