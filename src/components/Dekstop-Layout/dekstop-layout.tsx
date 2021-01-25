import React from 'react'
import styles from './dekstop-layout.module.scss'
function DekstopLayout() {
    return (
        <div className={styles.dekstop} style={{backgroundImage: "url('./walpaper.jpg')"}}>
           <div className={styles.itemContainer}>
                <div className="flex flex-col  content-center text-center" style={{width: '10px',height: '10px',color: '#fff'}}>
                    <i className="fas fa-trash"></i>
                    <p>keranjang sampah</p>
                </div>
              
           </div>
        </div>

    )
}

export default DekstopLayout
