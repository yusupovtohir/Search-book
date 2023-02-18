import { useEffect, useState } from "react";
import Card from "../card/card";
import {ApiService} from "../api-service/api-service";

const Main = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([])

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      ApiService.fetching(search).then(data => setBooks(data.items))
      setSearch('')
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            O'zingizga yoqqan kitobni <br /> osonlik bilan toping
          </h1>
        </div>
        <div className="row2">
          <div className="search">
            <input
              type="text"
              placeholder="Qidirish"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        {books.map(item => <Card books={books} key={item.id}/>)}
      </div>
    </>
  );
};

export default Main;
