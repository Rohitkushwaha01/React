import React from "react";
import { useState } from "react";
import "./Comment.css"

export default function Comments() {
  const comments = [
    { id: 1, user: "Rohit", comment: "Nice video" },
    { id: 2, user: "Gaurav", comment: "Kdk🔥" },
    { id: 3, user: "Shubham", comment: "Awesome tutorial" },
    {id: 4,user: "pankaj",comment: "Improve video quality and sound quality",}
];

  let [showComments, setshow] = useState(false);

  let change = () => {
    setshow(!showComments);
  };
  return (
    <>
      <div className="comments">
        <h2>Comments ({comments.length})</h2>

        {showComments ? (
          <label id="show-comment" onClick={change}>
            Hide Comments
          </label>
        ) : (
          <label id="show-comment" onClick={change}>
            Show Comments
          </label>
        )}
      </div>
      
      <div className="all-comment">
      {showComments &&
          comments.map((c) => (
            <p className="each-comment" key={c.id}>
              <span>{c.user}</span> : {c.comment}
            </p>
          ))}
      </div>
    </>
  );
}
