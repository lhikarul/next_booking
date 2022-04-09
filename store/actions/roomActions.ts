import { IncomingMessage } from 'http'
import {setAllRoomsFail, setAllRoomsSuccess} from '../slices/allRoomsSlice'

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