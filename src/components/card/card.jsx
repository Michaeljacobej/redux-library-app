import React from "react";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";
import "./card.css";


export default function card(books,search) {
  if (books) {
    return books.filter((book)=> book.title.toLowerCase().includes(search)
    ).sort((userA, userB) => Number(userA.date) - Number(userB.date)).map((book) => (
      
     <div class="cardd">
      <Link to={`/detail/${book.id}`} >
          <img src={book.url} class="card-img-top" alt="..." />
        </Link>
      
        <div class="card-body">
          <h5 class="card-title" id="card-title">
            {book.title}
          </h5>
          <p class="card-text" id="card-description">
            {book.description}
          </p>
        </div>
      </div>

    ));
  }
}


