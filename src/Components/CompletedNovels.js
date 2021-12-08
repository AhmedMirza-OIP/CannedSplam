import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

function CompletedNovels({ item, onClick }) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 completed-books">
      <div className="completed-image-and-text-container">
        <img src={item.image} className="completed-book-image" />
        <p className="mp-cs-text">CS</p>
        <p className="completed-book-status">{item.status} </p>
        <p className="completed-book-heading">{item.heading} </p>
      </div>
      <p className="completed-book-title">
        {window.screen.width <= 768
          ? `${item.title.substring(0, 25)}...`
          : item.title.length > 35
          ? `${item.title.substring(0, 35)}...`
          : item.title}
      </p>
      <p className="completed-book-chapters">
        <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
      </p>
    </div>
  );
}

export default CompletedNovels;
