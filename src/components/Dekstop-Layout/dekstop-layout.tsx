import React from 'react'
import ContextMenu from '../../tes'
import WindowItems from '../window-items/window-items'
import styles from './dekstop-layout.module.scss'
function DekstopLayout() {
    const [itemActive,setItemActive] = React.useState(false)
    const handleClick = () =>{
        setItemActive(false)
    }
    console.log(itemActive)
    return (
        <>
              <ContextMenu/>

        <div   className={styles.dekstop} style={{backgroundImage: "url('./walpaper.jpg')"}}>
           <div className={styles.itemContainer} >
               <WindowItems itemActive={itemActive} setItemActive={setItemActive}/>
               <WindowItems itemActive={itemActive} setItemActive={setItemActive}/>
              
           </div>
        </div>
        </>

    )
}

export default DekstopLayout
