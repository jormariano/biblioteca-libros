import { useState } from "react"
import { useAppContext } from "../Context/Store";
import { Link } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [summary, setSummary] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const store = useAppContext();

  const handleChange = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      summary,
      completed,
      review
    }

    store.createItem(newBook);

    setTitle('');
    setAuthor('');
    setSummary('');
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
    <div>
      <Link to='/'> Home </Link>
      <form onSubmit={handleChange}>
        <div>
          <h2>Title</h2>
          <input type='text' id='title' onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <h2>Author</h2>
          <input type='text' id='author' onChange={(e) => setAuthor(e.target.value)} value={author} />
        </div>
        <div>
          <h2>Cover</h2>
          <input type='file' id='cover' onChange={handleChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" alt='preview' /> : ''} </div>
        </div>
        <div>
          <h2>Summary</h2>
          <input type='text' id='summary' onChange={(e) => setSummary(e.target.value)} value={summary} />
        </div>
        <div>
          <h2>Completed</h2>
          <input type='checkbox' id='completed' onChange={(e) => setCompleted(e.target.checked)} value={completed} />
        </div>
        <div>
          <h2>Review</h2>
          <input type='text' id='review' onChange={(e) => setReview(e.target.value)} value={review} />
        </div>
        <button type="submit" >REGISTER BOOK</button>
      </form>
    </div>
  )
}

export default Create