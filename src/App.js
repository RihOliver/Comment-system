import React, { useState } from 'react'
import './App.css';
import PeopleImage from "./Img/people.svg"

function App() {
  const [textArea, setTextArea] = useState('');
  const [comments, setComments] = useState([]);

  function textAreaValue(event) {
    setTextArea(event.target.value)
  }

  function commentPost() {
    const allComments = [...comments, textArea]
    setComments(allComments)
  }

  return (
    <div>
      <img src={PeopleImage} alt="Imagem de pessoas" />
      <textarea onChange={textAreaValue}></textarea>
      <button onClick={commentPost}>Comentar</button>

      <ul>
        {comments.map(commentFixed => (
          <li key={commentFixed}>{commentFixed}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
