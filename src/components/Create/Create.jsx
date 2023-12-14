import './Create.css'
import { useState } from "react"
import { useAppContext } from "../../Context/Store";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Create = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [summary, setSummary] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const store = useAppContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      cover,
      summary,
      completed,
      review
    }

    store.createItem(newBook);

    navigate('/');

    setTitle('');
    setAuthor('');
    setSummary('');
    setCompleted(false);
    setReview('');
  }

  const handleChangeFile = (e) => {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (

    <form className='create-container' onSubmit={handleChange}>
      <div className='create-img'>
        {!!cover ? <img src={cover} alt='preview' /> : ''}
      </div>
      <div className='create-input-button'>
        <div className='create-input'>
          <h3>Title</h3>
          <input type='text' id='title' onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className='create-input'>
          <h3>Author</h3>
          <input type='text' id='author' onChange={(e) => setAuthor(e.target.value)} value={author} />
        </div>
        <div className='create-input'>
          <h3>Summary</h3>
          <input type='text' id='summary' onChange={(e) => setSummary(e.target.value)} value={summary} />
        </div>
        <div className='create-input'>
          <input type='file' id='cover' onChange={handleChangeFile} />
        </div>
        <div className='create-input'>
          <h3>Completed</h3>
          <input type='checkbox' id='completed' onChange={(e) => setCompleted(e.target.checked)} value={completed} />
        </div>
        <div className='create-input'>
          <h3>Review</h3>
          <input type='text' id='review' onChange={(e) => setReview(e.target.value)} value={review} />
        </div>
        <button className='create-button' type="submit"> REGISTER BOOK </button>
      </div>
    </form>

  )
}

export default Create