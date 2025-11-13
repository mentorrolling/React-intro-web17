import React from "react";

const CardNewApp = ({ noticia }) => {
  const { author, title, description, urlToImage, url } = noticia;

  return (
    <a href={url} target="_blank" className="card-link">
      <article className="card-noticias">
        <header>
          <img src={urlToImage} alt={title} />
        </header>
        <section>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
        <footer>
          <small>{author}</small>
        </footer>
      </article>
    </a>
  );
};

export default CardNewApp;
