import Layout from '../../components/Layout'
import RoomDetails from '../../components/Room/RoomDetail'
import { wrapper } from '../../store'
import { getRoomDetails } from '../../store/actions/roomActions'

export default function RoomDetailsPage() {
  return (
    <Layout>
       <RoomDetails />
    </Layout>
  )
}

export async function getStaticPaths () {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps = wrapper.getStaticProps(store => async({params}) => {
    await store.dispatch(getRoomDetails(params?.id as string))
    return {
      props: {}
    }
})
