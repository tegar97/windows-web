import React from 'react'
import NavSearch from '../nav-search/nav-search'
import NavbarItem from '../navbar-item/navbar-item'
import styles from './navbar-layout.module.scss'
function NavbarLayout() {
    return (
        <div className={styles.navbar}>
            <NavbarItem/>
            <NavSearch/>
        </div>
    )
}

export default NavbarLayout
