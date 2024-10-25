import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({Children}) => {
    return (
        <div className="flex">
            <div className='w-72'>
                <Sidebar/>
            </div>
            <main className='w-full p-5'>
                {Children}
            </main>
        </div>
    )
}

export default Layout