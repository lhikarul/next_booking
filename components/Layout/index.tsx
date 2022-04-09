import Head from 'next/head'

import Header from './Header'
import { ReactNode } from 'react';
import Footer from './Footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


interface ILayout {
    children: ReactNode,
    title: string
}

export default function Layout ({children, title}: ILayout) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <ToastContainer position="bottom-right"/>
            {children}
            <Footer />
        </div>
    )
}
