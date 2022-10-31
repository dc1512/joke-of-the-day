import styles from './Header.module.css';
import Button from './Button';
import { useGetRandomJoke } from '../app/store';

const apiDocsURL = "https://github.com/eklavyadev/karljoke";

const Header = () => {
  return (
    <header className={styles.header}>
      <Button buttonType="getRandomJoke" handleClick={useGetRandomJoke()} />
      <a href={apiDocsURL} target="_blank" rel="noopener noreferrer" className={styles.apiLink}>View API Docs</a>
    </header>
  );
}

export default Header;
