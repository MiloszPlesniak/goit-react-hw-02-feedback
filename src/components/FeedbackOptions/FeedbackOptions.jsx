const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </div>
  );
};

export default FeedbackOptions