import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppContainer } from './AppContainer/AppContainer';
import { FeedbackStats } from './FeedbackStats/FeedbackStats';
import { NotificationMessage } from './notification-message/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeavingFeedback = options => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round(
    ((good + neutral) / total) * 100
  );

  return (
    <>
      <AppContainer title="Please, leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeavingFeedback={onLeavingFeedback}
        />
      </AppContainer>

      <AppContainer title="Statistics">
        {total === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <FeedbackStats
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        )}
      </AppContainer>
    </>
  );
};
