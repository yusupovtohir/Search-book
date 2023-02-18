const Modal = ({show, bookItem, onClose}) => {
  if(!show) {
    return null
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={bookItem.volumeInfo.imageLinks.thumbnail} alt="book" />
            <div className="info">
              <h1>{bookItem.volumeInfo.title}</h1>
              <h3>{bookItem.volumeInfo.authors}</h3>
              <h4>
               {bookItem.volumeInfo.publisher}
                <span>{bookItem.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={bookItem.volumeInfo.previewLink} target={'_blank'}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{bookItem.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
