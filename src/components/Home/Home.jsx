import './Home.css'
import { useAppContext } from "../../Context/Store"

const Home = () => {

  const store = useAppContext();

  return (
    <div>

      {store.items.map(item => <div key={item.id}>{item.title}</div>)}

    </div>
  )
}

export default Home