import React from 'react';
import logo from './logo.svg';
import styles from './app.module.scss'
import DekstopLayout from './components/Dekstop-Layout/dekstop-layout';

function App() {
  return (
    <div className={styles.main}>
      <DekstopLayout/>
      <div className="bg-black" style={{height: '6%'}}>navbar</div>
    </div>
  );
}

export default App;
