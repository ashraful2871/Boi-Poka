import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl border-2 p-6 rounded-2xl mt-6">
        <figure className=" border-2 py-8 px-24 bg-[#F3F3F3] rounded-2xl">
          <img
            className="w-32 h-40 mx-auto object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag, idx) => (
              <div key={idx} className="badge bg-[#F4FCF3] text-[#23BE0A] p-3">
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="divider border-t border-dashed"></div>
          <div className="card-actions justify-between ">
            <div className=" ">{category}</div>
            <div className="">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
