import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function MostWantedNovelsMapper({ item, onClick }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 most-popular-books">
      <img src={item.image} className="mp-book-image" />
      <div className="book-details">
        <p className="mp-book-title">
          {window.screen.width <= 768
            ? `${item.title.substring(0, 30)}...`
            : item.title.length > 50
            ? `${item.title.substring(0, 50)}...`
            : item.title}
        </p>
        <div className="mp-book-category">
          <svg class="svg-inline-mp-cat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18px 18px">
                            <path class="st0" d="M2.3,0h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3H2.3C1.1,7.8,0,6.8,0,5.5V2.3C0,1.1,1.1,0,2.3,0z"/>
	                        <path class="st0" d="M12.5,0h3.1C16.9,0,18,1.1,18,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3h-3.1c-1.3,0-2.3-1.1-2.3-2.3V2.3 C10.2,1.1,11.2,0,12.5,0z"/>
	                        <path class="st0" d="M2.3,10.2h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3H2.3C1.1,18,0,16.9,0,15.7v-3.1 C0,11.2,1.1,10.2,2.3,10.2z"/>
	                        <path class="st0" d="M12.5,10.2h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3h-3.1c-1.3,0-2.3-1.1-2.3-2.3v-3.1 C10.2,11.2,11.2,10.2,12.5,10.2z"/>
          </svg> 
          <p className="mp-book-category-tag">{item.category}</p>
          <p className="mp-book-status">{item.status} </p>
        </div>
        <p className="mp-book-description">
          {item.description.length > 150
            ? `${item.description.substring(0, 150)}...`
            : item.description}
        </p>
        <div className="mp-book-chapters">
          <svg class="mp-book-chapter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M3,12h8c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H2C0.9,0,0,0.9,0,2v11c0,1.7,1.3,3,3,3h8c0.6,0,1-0.4,1-1 s-0.4-1-1-1H3c-0.6,0-1-0.4-1-1S2.4,12,3,12z"/></svg> 
          <p className="mp-book-chapter-number">{`${item.chapters} Chapters`}</p>
          <svg class="mp-favorite-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        </div>

      </div>
    </div>
  );
}

export default MostWantedNovelsMapper;
