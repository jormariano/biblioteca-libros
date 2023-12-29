import './Home.css'
import Book from '../Book/Book';
import { useAppContext } from "../../Context/Store"
import { useTranslation } from 'react-i18next'

const Home = () => {

  const store = useAppContext();

  const imgArrow = "../../img/home-arrow.png"

  const { t, i18n } = useTranslation(['global']);

  function changeToSpanish() {
    console.log("Changing language to Spanish");
    i18n.changeLanguage('es');
  }

  function changeToEnglish() {
    console.log("Cambiar a ingles");
    i18n.changeLanguage('en');
  }

  return (
    <>
      <div className='home-arrow'>
        <h2>{t("text")}</h2>
        <img src={imgArrow} alt="arrow" />
      </div>
      <button onClick={changeToSpanish}>Cambiar a español</button>
      <button onClick={changeToEnglish}>Change to English</button>

      <div className='home-container'>

        {store.items.map(item => <Book key={item.id} item={item} />)}

      </div>
    </>
  )
}

export default Home