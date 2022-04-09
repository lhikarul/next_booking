import Link from "next/link";
import { useAppSelector } from "../../store";
import RoomItem from "../Room/RoomIem";
import Pagination from 'react-js-pagination'
import { useRouter } from "next/router";

function Home() {
    const router = useRouter()
    const {rooms, resPerPage, roomsCount, filteredRoomsCount, error} = useAppSelector(state => state.allRooms)
    let count = filteredRoomsCount
    let {page = 1} = router.query
    page = Number(page)

    let queryParams: URLSearchParams
    if (typeof window !== 'undefined') {
        queryParams = new URLSearchParams(window.location.search)
    }

    const handlePagination = (pageNumber: number) => {
        let pageStr = String(pageNumber)
        if (queryParams.has('page')) {
            queryParams.set('page', pageStr)
       } else {
           queryParams.append('page', pageStr)
       }
       router.replace({
           search: queryParams.toString()
       })
    }
    return (
        <>
            <section id="rooms" className="container mt-5">

                <h2 className='mb-3 ml-2 stays-heading'>{"All Rooms"}</h2>

                <Link href='/search'> 
                <a className="ml-2 back-to-search">
                        <i className='fa fa-arrow-left'></i> Back to Search
                </a>
                </Link>
                
                <div className="row">
                    {rooms && rooms.length === 0 ?
                        <div className="alert alert-danger">No Rooms.</div>
                        :
                        rooms && rooms.map((room:any) => (
                            <RoomItem key={room._id} room={room}/>
                        ))
                    }
                </div>

            </section>

            {
                resPerPage < count && 
                <div className="d-flex justify-content-center mt-5 ">
                    <Pagination 
                        activePage={page}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={roomsCount}
                        onChange={handlePagination}
                        nextPageText={'Next'}
                        prevPageText={'Prev'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
            </div>
            }
        </>
        
    );
}

export default Home;