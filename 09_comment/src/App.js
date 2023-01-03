import './index.css';
import Comments from './components/Comments';


function App() {
  const title = "Web 2Devlop Blog Post";
  const body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt quae sequi dicta repudiandae? Obcaecati tempore itaque cumque facere veniam illum quidem cupiditate. Magni excepturi voluptatibus nostrum ex libero esse cumque totam quae expedita reprehenderit, deleniti at officia, quisquam sint minima ea. Molestiae possimus consequuntur recusandae! Numquam laboriosam animi fugit."
  
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <Comments />
    </>
  )
}

export default App;
