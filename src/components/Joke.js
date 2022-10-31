import styles from './Joke.module.css';
import JokeLine from './JokeLine';
import Button from './Button';
import NetworkRequestMessage from './NetworkRequestMessage';
import { useError, useLoading, useSetup, usePunchline, useTogglePunchline, usePunchlineHidden } from '../app/store';

const Joke = () => {
  const setup = useSetup();
  const punchline = usePunchline();
  const punchlineHidden = usePunchlineHidden();
  const togglePunchline = useTogglePunchline();
  return (
    <div className={styles.jokeContainer}>
      { setup && punchline &&
        <>
          <JokeLine lineType="setup" lineText={setup} />
          { punchlineHidden && <Button buttonType="showPunchLine" handleClick={togglePunchline} /> }
          { !punchlineHidden && <Button buttonType="hidePunchLine" handleClick={togglePunchline} /> }
          { !punchlineHidden && <JokeLine lineType="punchLine" lineText={punchline} /> }
        </>
      }
      { useLoading() && <NetworkRequestMessage messageType="loading" />}
      { useError() && <NetworkRequestMessage messageType="error" /> }
    </div>
  );
};

export default Joke;
