import cx from 'classnames';
import styles from './NetworkRequestMessage.module.css';

const NetworkRequestMessage = ({messageType}) => {
  const messages = {
    loading: "Loading your joke...",
    error: "There was an error loading your joke.",
  }
  const message = messages[messageType];
  return (
    <div className={cx(styles.messageContainer, {
      [styles.loading]: messageType === 'loading',
      [styles.error]: messageType === 'error',
    })}>{message}</div>
  );
}

export default NetworkRequestMessage;
