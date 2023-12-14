import './Book.css'
import { Link } from 'react-router-dom'

const Book = ({ item }) => {
  return (
    <div className='book-container'>
      <Link to={`/view/${item.id}`} className='book-link'>
        <img src={item.cover} alt={item.title} />
        <h2>{item.title}</h2>
      </Link>
    </div>
  )
}

export default Book