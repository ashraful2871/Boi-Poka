const Book = ({ book }) => {
  const { bookName, author, image, review, totalPages } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 p-6">
      <figure className=" border-2 py-8 px-24 bg-[#F3F3F3]">
        <img
          className="w-32 h-40 mx-auto object-cover"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
