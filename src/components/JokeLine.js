import cx from 'classnames';
import styles from './JokeLine.module.css';

function JokeLine({lineText, lineType}) {
  return (
    <div className={styles.jokeLineContainer}>
      <p className={cx(styles.jokePara, {
        [styles.setupPara]: lineType === 'setup',
        [styles.punchLinePara]: lineType === 'punchLine',
      })}>
        {lineText}
      </p>
    </div>
  );
}

export default JokeLine;
