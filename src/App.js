import Header from './components/Header';
import Joke from './components/Joke';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Joke />
    </div>
  );
}

export default App;
