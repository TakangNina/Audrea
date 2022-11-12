import React from "react";
import { useParams } from "react-router-dom";
import "./interests.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './interests.css'

function Interests() {
  const [books, setBooks] = useState([]);

  const { subject } = useParams();

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&key=AIzaSyCIFOP8iRedThILHdPmIdkl1m3zyUBpAd8`
      );
      
  
      setBooks(res.data.items);
      console.log(res.data.items[0]);
    };

    getBooks();
  }, []);

  const Book = ({ image, title, author, description }) => {
    return (
      <div className="card">
        <div className="card-img-container">
        <img src={image} alt={title} />

        </div>
        <div className="card-title">

        <a href={image}>Title: {title}</a>
        </div>
        <h4 className="card-author">Author: {author}</h4>
        <p className="card-description" >Description: {description.length>50?description.slice(0,50) +" ...":description}</p>
      </div>
    );
  };

  return (
    <div className="w-screen flex justify-content-center align-items-center h-100 ">
      <div className="w-full  pt-10 container-for-card" >
        {books.length !== 0
          ? books
              .filter(
                (book) => book.volumeInfo.authors && book.volumeInfo.imageLinks
              )
              .map((book) => {
                console.log(book.volumeInfo.imageLinks);
                return (
                  <Book
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors[0]}
                    description={book.volumeInfo.description}
                    key={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                  />
                );
              })
          : "No subject selected"}
      </div>
    </div>
  );
}

export default Interests;
