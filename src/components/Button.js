import cx from 'classnames';
import styles from './Button.module.css';

function Button({buttonType, handleClick}) {
  const buttons = { 
    "showPunchLine": "Show Punchline",
    "hidePunchLine": "Hide Punchline",
    "getRandomJoke": "Get A New Random Joke",
  };
  const buttonText = buttons[buttonType];

  return (
    <button 
      className={cx(styles.jokeButton, {
        [styles.showPunchLine]: buttonType === 'showPunchLine',
        [styles.hidePunchLine]: buttonType === 'hidePunchLine',
        [styles.getRandomJoke]: buttonType === 'getRandomJoke',
      })} 
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
