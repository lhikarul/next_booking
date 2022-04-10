import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IRoomDetail {
        _id: string,
        name: string,
        pricePerNight: number,
        description: string,
        address: string,
        guestCapacity: number,
        numOfBeds: number,
        internet: boolean,
        breakfast: boolean,
        airConditioned: boolean,
        petsAllowed: boolean,
        roomCleaning: boolean,
        ratings: number,
        numOfReviews: number,
        images?: [
            {
                public_id: string,
                url: string
                _id: string
            }
        ],
        category: string,
        reviews: [],
        createdAt: Date | null
}

const initialState: IRoomDetail = {
        _id: '',
        name: '',
        pricePerNight: 0,
        description: '',
        address: '',
        guestCapacity: 0,
        numOfBeds: 0,
        internet: false,
        breakfast: false,
        airConditioned: false,
        petsAllowed: false,
        roomCleaning: false,
        ratings: 0,
        numOfReviews: 0,
        images: undefined,
        category: '',
        reviews: [],
        createdAt: null
}

export const roomDetailSlice = createSlice({
    name: 'allRooms',
    initialState,
    reducers: {
       setRoomDetailSuccess: (state, action: PayloadAction<IRoomDetail>) => {
           return {
               ...state,
               ...action.payload
           }
       },
       clearErrors: (state) => {
           return {
               ...state,
               error: null
           }
       }
    }
})

export const {setRoomDetailSuccess} = roomDetailSlice.actions
export default roomDetailSlice.reducer