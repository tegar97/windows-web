import React from 'react'
import styles from './nav-search.module.scss'
function NavSearch() {
    const handleClick = () => {
        console.log('YOOOO')
    }
    return (
        <div style={{position:'relative'}}>
            <i className={`${styles.searchIcon} fas fa-search`}  ></i>
            <input onClick={handleClick} placeholder="Ketik disini untuk mencari" className={styles.navSearch}/>
        </div>
    )
}

export default NavSearch
