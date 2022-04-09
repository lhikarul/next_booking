export interface IRooms {
    filteredRoomsCount: number,
    resPerPage: number,
    roomsCount: number
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
    success: boolean
  }