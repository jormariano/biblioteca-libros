import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'

const NavBar = () => {

    const imgLibros = "../../img/books-icon.png"

    const {t} = useTranslation(['global']);

  return (
    <header>
      <Link to="/">
        <img className="img-books" src={imgLibros} alt="img libros" />
      </Link>

      <nav>
        <ul className='un-list'>
          <li><NavLink to="/create" className="nav-link"> {t('title')} </NavLink></li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar