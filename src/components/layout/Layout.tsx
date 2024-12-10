import React from 'react'
import Navbar from '../head/Navbar'
interface ILayout {
    children: React.ReactNode
}
function Layout({ children }: ILayout) {
    return (
        <> <Navbar />{children}</>
    )
}

export default Layout