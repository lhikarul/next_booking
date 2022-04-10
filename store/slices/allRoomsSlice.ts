import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IAllRooms {
    filteredRoomsCount: number,
    resPerPage: number,
    roomsCount: number,
    rooms: {
      _id: string,
      name: string,
      pricePerNight: number,
      description: string
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
      images: [
          {
              public_id: string,
              url: string,
              _id: string
          }
      ],
      category: string
      reviews: [],
      createdAt: string,
    },
    success: boolean,
    error: any
}

const initialState: IAllRooms = {
    filteredRoomsCount: 0,
    resPerPage: 0,
    roomsCount: 0,
    rooms: {
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
      images: [
          {
              public_id: '',
              url: '',
              _id: ''
          }
      ],
      category: '',
      reviews: [],
      createdAt: '',
    },
    success: false,
    error: null

}

export const allRoomsSlice = createSlice({
    name: 'allRooms',
    initialState,
    reducers: {
       setAllRoomsSuccess: (state, action: PayloadAction<IAllRooms>) => {
           return {
               ...state,
               roomsCount: action.payload.roomsCount,
               resPerPage: action.payload.resPerPage,
               filteredRoomsCount: action.payload.filteredRoomsCount,
               rooms: action.payload.rooms
           }
       },
       setAllRoomsFail: (state, action) => {
            return {
                ...state,
                error: action.payload
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

export const {setAllRoomsSuccess, setAllRoomsFail, clearErrors} = allRoomsSlice.actions
export default allRoomsSlice.reducer