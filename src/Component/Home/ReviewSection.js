import React, { useEffect, useState } from "react";

const ReviewSection = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    let set = false;
    if (!set) {
      fetch(`/peoplereview.json`)
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
        });
    }
    return () => {
      set = true;
    };
  }, []);
  if (review.length === 0) return null;
  return (
    <div>
      <section id="BestSellers">
        <div className="container">
          <div className="BestSellerswrapper">
            <div className="BestSellersTop mt-5 text-lg-center text-white">
              <p>
                Best <span className="yellow_text">Sellers</span>
              </p>
            </div>
            <div className="BestSellersBottom">
              <div className="row BestSellerscarts justify-content-lg-center">
                {review.map((review, index) => (
                  <div  key={index} className="col-lg-3 col-6">
                    <div className="feature-card">
                      <div className="img">
                        <img src={review.img} alt="img"></img>
                      </div>
                      <div className="info ms-3">
                        <h2> {review.name} </h2>
                        <p>
                          {" "}
                          <span> {review.price} </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
