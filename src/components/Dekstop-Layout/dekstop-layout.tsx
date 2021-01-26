import React from 'react'
import { ContextMenuTrigger, MenuItem } from 'react-contextmenu'
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

        <div   className={styles.dekstop} style={{backgroundImage: "url('./walpaper.jpg')"}}>
        {/* <ContextMenuTrigger  id="same_unique_identifier"/>

        
        <ContextMenu  className="contextMenu" selected	 id="same_unique_identifier">
            <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
            ContextMenu Item 1
            </MenuItem>
            <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
            ContextMenu Item 2
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{foo: 'bar'}} onClick={handleClick}>
            ContextMenu Item 3
        </MenuItem>
      </ContextMenu> */}
           <div className={styles.itemContainer} >
               <WindowItems itemActive={itemActive} setItemActive={setItemActive}/>
               <WindowItems itemActive={itemActive} setItemActive={setItemActive}/>
              
           </div>
        </div>
        </>

    )
}

export default DekstopLayout
