import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id)=>{
    if(window.confirm("Are you sure you want to delete the item?")){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <FeedbackStats feedback = {feedback} />
      <FeedbackList feedback = {feedback} handleDelete={deleteFeedback}/>
    </>
  );
}

export default App;
