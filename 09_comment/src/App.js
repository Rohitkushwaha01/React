import './index.css';
import { useState } from 'react';

function App() {
  const title = "Web 2Devlop Blog Post";
  const body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit."
  const comments = [
    {id:1, user:"Rohit", comment:"Nice video"},
    {id:2, user:"Gaurav", comment:"Kdk🔥🔥"},
    {id:3, user:"Shubham", comment:"Awesome tutorial"},
    {id:4, user:"pankaj", comment:"Improve video quality and sound quality"},
  ]

  let [showComments, setshow] = useState(false);

  let change = ()=>{
    setshow = true;
  }

  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <div className='comments'>
        <h2>Comments ({comments.length})</h2>
        {showComments ? (
          comments.map((c)=><p className="each-comment" key={c.id}>{c.user} : {c.comment} 👍</p>)
        ) : (<button id='show-comment' onClick={change}>Show Comments</button>)}
      </div>
    </>
  )
}

export default App;
