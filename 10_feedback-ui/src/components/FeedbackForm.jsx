import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [rating, setRating] = useState(10);

  const handleChange = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text.length !== "" && text.trim().length < 5) {
      setIsDisabled(true);
      setMessage("Review atleast be more than 5 characters");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
    setLetterCount(text.length+1);
  };

  return (
    <Card>
      <h2>How would you like to rate our service?</h2>
      <RatingSelect select={(rating)=>{setRating(rating)}} />
      <div className="input-group">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Write a review"
          value={text}
        />
        <Button type={"submit"} isDisabled={isDisabled}>
          Send
        </Button>
      </div>

      <div className="review-count">
        <div className="count">{letterCount}</div>
        {message && <div className="message">{message}</div>}
      </div>
    </Card>
  );
}
