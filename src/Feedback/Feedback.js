import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import shortid from 'shortid';
import styles from './Feedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackId = () => shortid.generate();

  return (
    <ul className={styles['btn-list']}>
      {options.map(el => (
        <li className={styles['btn-list-item']} key={feedbackId()}>
          <Button variant="outline-primary" onClick={onLeaveFeedback}>
            {el[0].toUpperCase() + el.slice(1)}
          </Button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
