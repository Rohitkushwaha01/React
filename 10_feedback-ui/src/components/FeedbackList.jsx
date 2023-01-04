import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import Card from "./shared/Card";
export default function FeedbackList({ feedback, handleDelete }) {
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <Card>
          NO FEEDBACK FOUND!!!
        </Card>
      ) : (
        feedback.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
