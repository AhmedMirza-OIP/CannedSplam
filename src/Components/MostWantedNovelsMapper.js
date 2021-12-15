import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";
import "../Styles/clientStyles.css";
import React from "react";
import CI from "./../Assets/Images/Categories Icon.svg";
import CCI from "./../Assets/Images/Chapter Count Icon.svg";
import Cover from "./../Assets/Images/cover.png";
function MostWantedNovelsMapper({ item, onClick }) {
  return (
    <div className="most-popular-books mb-5">
      <div className="mp-image-and-text-container">
        <img src={Cover} className="mp-book-cover" />
      </div>

      <div className="book-details">
        <p className="mp-book-title">
          {window.screen.width <= 768
            ? `${item.title.substring(0, 30)}...`
            : item.title.length > 50
            ? `${item.title.substring(0, 50)}...`
            : item.title}
        </p>

        <div className="mp-book-category">
          <img src={CI} className="mp-book-cat-icon" />
          <p className="mp-book-category-tag">urban</p>
          <p className="mp-book-status">Ongoing</p>
        </div>
        <p className="mp-book-description">
          {item.description.length > 70
            ? `${item.description.substring(0, 70)}...`
            : item.description}
        </p>

        <div className="mp-book-chapters">
          <img src={CCI} className="mp-book-chapter-icon" />
          <p className="mp-book-chapter-number">3471 Chapters</p>
          <svg
            className="mp-favorite-heart-unfilled"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </div>
      </div>
      {/* <div className="mp-image-and-text-container">
        <img src={item.image} className="mp-book-image" />
        <p className="mp-cs-text">CS</p>
        <p className="mp-book-status">{item.status} </p>
        <p className="mp-book-heading">{item.heading} </p>
      </div>
      <div className="book-details">
        <p className="mp-book-title">
          {window.screen.width <= 768
            ? `${item.title.substring(0, 30)}...`
            : item.title.length > 50
            ? `${item.title.substring(0, 50)}...`
            : item.title}
        </p>
        <p className="mp-book-category">
          <FontAwesomeIcon icon={faThLarge} /> {item.category}
        </p>
        <p className="mp-book-description">
          {item.description.length > 70
            ? `${item.description.substring(0, 70)}...`
            : item.description}
        </p>
        <p className="mp-book-chapters">
          <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
        </p>
      </div> */}
    </div>
  );
}

export default MostWantedNovelsMapper;
{
  /* <div class="col-lg-4 col-md-6 col-sm-6 most-popular-books">
                <img src="/uploads/cover.png" class="mp-book-cover" />
                <div class="book-details">
                    <p class="mp-book-title">Book Title Goes Here On Two Lines Even Test Test T...</p>
                    <div class="mp-book-category">
                        <img src="/uploads/Categories Icon.svg" class="mp-book-cat-icon">
                        <p class="mp-book-category-tag">urban</p>
                        <p class="mp-book-status">Ongoing</p>
                    </div>
                    <p class="mp-book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dictum erat, vitae</p>
                    <div class="mp-book-chapters">
                        <img src="/uploads/Chapter Count Icon.svg" class="mp-book-chapter-icon">
                         <p class="mp-book-chapter-number">3471 Chapters</p>
                         <svg class="mp-favorite-heart-unfilled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                    </div>
                </div> 
            </div>  */
}




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

// import React from "react";

// function MostWantedNovelsMapper({ item, onClick }) {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-6 most-wanted-books">
//       <div className="mp-image-and-text-container">
//         <img src={item.image} className="mp-book-image" />
//         <p className="mp-cs-text">CS</p>
//         <p className="mp-book-status">{item.status} </p>
//         <p className="mp-book-heading">{item.heading} </p>
//       </div>
//       <div className="book-details">
//         <p className="mp-book-title">
//           {window.screen.width <= 768
//             ? `${item.title.substring(0, 30)}...`
//             : item.title.length > 50
//             ? `${item.title.substring(0, 50)}...`
//             : item.title}
//         </p>
//         <p className="mp-book-category">
//           <FontAwesomeIcon icon={faThLarge} /> {item.category}
//         </p>
//         <p className="mp-book-description">
//           {item.description.length > 70
//             ? `${item.description.substring(0, 70)}...`
//             : item.description}
//         </p>
//         <p className="mp-book-chapters">
//           <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MostWantedNovelsMapper;
