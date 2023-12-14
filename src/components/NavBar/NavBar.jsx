import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    const imgLibros = "./public/img/books-icon.png"

  return (
    <header>
      <Link to="/">
        <img className="img-books" src={imgLibros} alt="img libros" />
      </Link>

      <nav>
        <ul className='un-list'>

          <li><NavLink to="/create" className="nav-link"> CREATE </NavLink></li>

        </ul>
      </nav>

    </header>
  )
}

export default NavBar