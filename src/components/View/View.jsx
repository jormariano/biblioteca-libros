import './View.css'
import Layout from '../Layout/Layout';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from '../../Context/Store';

export default function View() {

  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {

    const book = store.getItem(params.bookId);

    setItem(book);

  }, []);

  return (
    <Layout>
      <div className='view-container'>
        <div>{item?.cover ? <img src={item.cover} /> : ""}</div>
        <div className='view-container-text'>
          <h2>{item?.title}</h2>
          <h3>{item?.author}</h3>
          <h3>{item?.summary}</h3>
          <h3>{item?.completed ? "Completed" : "Not finish"}</h3>
          <h3>{item?.review}</h3>
        </div>
      </div>
    </Layout>
  );
}