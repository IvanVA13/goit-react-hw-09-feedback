import { useState, useCallback } from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stat = {
    total: 0,
  };
  const addFeedback = useCallback(
    e => {
      switch (e.currentTarget.textContent.toLowerCase()) {
        case 'good':
          setGood(good + 1);
          break;
        case 'neutral':
          setNeutral(neutral + 1);
          break;
        case 'bad':
          setBad(bad + 1);
          break;

        default:
          break;
      }
    },
    [good, neutral, bad],
  );

  const countTotalFeedback = ({ good, neutral, bad }) =>
    (stat.total = good + neutral + bad);

  const countPositiveFeedbackPercentage = ({ good }) =>
    stat.total ? `${Math.round((good / stat.total) * 100)}%` : '0';

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          elStat={Object.keys({ good, neutral, bad })}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback({ good, neutral, bad })}
          positivePercentage={countPositiveFeedbackPercentage({
            good,
            neutral,
            bad,
          })}
        />
      </Section>
    </>
  );
};

export default App;
