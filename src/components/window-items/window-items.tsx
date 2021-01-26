import React from 'react'
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import styles from './windows-items.module.scss'

function WindowItems({itemActive,setItemActive} :any) {    
    const handleClick = () =>{
        setItemActive(true)
    }
    return (
        <>
           
       
        <div onClick={handleClick} className={styles.windowItem} style={{backgroundColor:  itemActive ? " rgba(0,123,215,.3)" :''}}>
        <ContextMenuTrigger id="test">
             </ContextMenuTrigger>
        <ContextMenu id="test24">
                <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
                HELLO WORLD1244444444444ASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                </MenuItem>
                <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
                ContextMenu Item 2
                </MenuItem>
                <MenuItem divider />
                <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
                ContextMenu Item 3
                </MenuItem>
      </ContextMenu>
            <img style={{width: '40px'}} src="/trash.png"/>
            <p   style={{color: '#fff',fontWeight:'lighter'}}>keranjang sampah</p>
        </div>
        </>
    )
}

export default WindowItems
