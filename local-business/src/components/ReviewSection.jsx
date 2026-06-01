import { useState, useEffect } from "react";

function ReviewSection({ businessId }) {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          `reviews-${businessId}`
        )
      ) || [];

    setReviews(saved);
  }, [businessId]);

  const addReview = () => {
    if (!name || !comment) return;

    const newReview = {
      name,
      comment,
      rating,
    };

    const updated = [
      ...reviews,
      newReview,
    ];

    setReviews(updated);

    localStorage.setItem(
      `reviews-${businessId}`,
      JSON.stringify(updated)
    );

    setName("");
    setComment("");
    setRating(5);
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (acc, item) =>
              acc + item.rating,
            0
          ) / reviews.length
        ).toFixed(1)
      : "No ratings";

  return (
    <div className="mt-10">

      <div className="bg-indigo-100 p-4 rounded-xl mb-6">
        <h2 className="text-2xl font-bold">
          ⭐ Community Reviews
        </h2>

        <p>
          Average Rating: {averageRating}
        </p>

        <p>
          Total Reviews: {reviews.length}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-2 rounded mb-3"
        />

        <textarea
          placeholder="Write a review..."
          value={comment}
          onChange={(e) =>
            setComment(
              e.target.value
            )
          }
          className="w-full border p-2 rounded mb-3"
        />

        <select
          value={rating}
          onChange={(e) =>
            setRating(
              Number(e.target.value)
            )
          }
          className="border p-2 rounded mb-3"
        >
          <option value="5">
            ⭐⭐⭐⭐⭐
          </option>
          <option value="4">
            ⭐⭐⭐⭐
          </option>
          <option value="3">
            ⭐⭐⭐
          </option>
          <option value="2">
            ⭐⭐
          </option>
          <option value="1">
            ⭐
          </option>
        </select>

        <button
          onClick={addReview}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {reviews.map(
          (review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h3 className="font-bold">
                {review.name}
              </h3>

              <p>
                {"⭐".repeat(
                  review.rating
                )}
              </p>

              <p>
                {review.comment}
              </p>
            </div>
          )
        )}
      </div>

    </div>
  );
}

export default ReviewSection;