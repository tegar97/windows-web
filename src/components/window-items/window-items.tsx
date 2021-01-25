import React from 'react'
import styles from './windows-items.module.scss'

function WindowItems({itemActive,setItemActive} :any) {    
    const handleClick = () =>{
        setItemActive(true)
    }
    return (
        <div onClick={handleClick} className={styles.windowItem} style={{backgroundColor:  itemActive ? " rgba(0,123,215,.3)" :''}}>
            <img style={{width: '40px'}} src="/trash.png"/>
            <p   style={{color: '#fff',fontWeight:'lighter'}}>keranjang sampah</p>
        </div>
    )
}

export default WindowItems
