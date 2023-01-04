import React, { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes} from "react-icons/fa"

export default function Feedback({item, handleDelete}) {
  return (
    <>
      <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>{handleDelete(item.id)}}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

Feedback.propTypes = {
  item: PropTypes.object,
}
