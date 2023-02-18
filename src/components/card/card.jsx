import { useState } from "react";
import Modal from "../modal/modal";

const Card = ({ books }) => {
  const [show, setShow] = useState(false)
  const [bookItem, setBookItem] = useState([])
console.log(books);
  return (
    <>
      {books.map((item) => {
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (amount != undefined) {
          return (
            <>
              <div className="card" key={item.id} onClick={() => {setShow(true); setBookItem(item)}}>
                <img src={item.volumeInfo.imageLinks.thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377; {amount}</p>
                </div>
              </div>
              <Modal show={show} bookItem={bookItem} onClose={() => setShow(false)}/>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
