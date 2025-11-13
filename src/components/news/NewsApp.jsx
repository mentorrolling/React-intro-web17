import { useEffect, useState } from "react";
import "../../css/noticias.css";
import CardNewApp from "./CardNewApp";
import ClimaApp from "../ClimaApp";

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=60d61bf9bbc140238ca4a4af21cce3c7";

  useEffect(() => {
    getNews().then((respuesta) => {
      setNews(respuesta);
      setLoading(false);
    });
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { articles } = data;
      return articles;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Portal de noticias</h1>
      <div className="container-wheater">
        <ClimaApp />
      </div>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="container-noticias">
          {news.map((noticia, index) => (
            <CardNewApp noticia={noticia} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsApp;
