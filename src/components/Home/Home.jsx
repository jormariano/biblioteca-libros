import './Home.css'
import Book from '../Book/Book';
import { useAppContext } from "../../Context/Store"

const Home = () => {

  const store = useAppContext();

  const imgArrow = "../../img/home-arrow.png"

  return (
    <>
      <div className='home-arrow'>
        <h2>Cargá tus libros y creá tu propio registro de lectura</h2>
        <img src={imgArrow} alt="arrow" />
      </div>

      <div className='home-container'>

        {store.items.map(item => <Book key={item.id} item={item} />)}

      </div>
    </>
  )
}

export default Home