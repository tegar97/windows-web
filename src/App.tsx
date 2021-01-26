import React,{useEffect} from 'react';
import logo from './logo.svg';
import styles from './app.module.scss'
import DekstopLayout from './components/Dekstop-Layout/dekstop-layout';
import ContextMenu from './tes'
import NavbarLayout from './components/navbar/navbar-layout';
function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', () => console.log('yeah'));
    
  }, []);
  const handleRightClick = () => {
    
  }
  return (
    <div className={styles.main}>
      <DekstopLayout />
     <NavbarLayout/>
    </div>
  );
}

export default App;
