import Layout from "../components/Layout";
import Home from '../components/Home'
import {wrapper} from '../store'
import { getRooms } from "../store/actions/roomActions";

function Index() {
  return (
    <Layout title={'Book Best Hotels for your Holiday'}>
      <Home />
    </Layout>
  );
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(store => async({req, query}) => {
  await store.dispatch(getRooms(req, query.page as string))
  return {
    props: {}
  }
})