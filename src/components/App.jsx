import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Section>
    </div>
  );
};
