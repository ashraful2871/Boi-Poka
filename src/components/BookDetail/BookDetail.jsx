import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const { bookId: bId, bookName, author, category, review, tags, image } = book;
  return (
    <div>
      <h2>book detail: {bId}</h2>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">{review}</p>

            <div className="flex gap-3 mb-4">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="badge bg-[#F4FCF3] text-[#23BE0A] p-3"
                >
                  {tag}
                </div>
              ))}
            </div>
            <button className=" btn-outline btn btn-info text-white font-bold mr-5">
              Mark as Read
            </button>
            <button className="btn btn-info text-white font-bold">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
