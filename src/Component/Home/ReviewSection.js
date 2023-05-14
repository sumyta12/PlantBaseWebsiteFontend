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
        <div class="container">
          <div class="BestSellerswrapper">
            <div class="BestSellersTop mt-5 text-lg-center text-white">
              <p>
                Best <span class="yellow_text">Sellers</span>
              </p>
            </div>
            <div class="BestSellersBottom">
              <div class="row BestSellerscarts justify-content-lg-center">
                {review.map((review, index) => (
                  <div class="col-lg-3 col-6">
                    <div key={index} class="feature-card">
                      <div class="img">
                        <img src={review.img} alt="img"></img>
                      </div>
                      <div class="info ms-3">
                        <h2> {review.name} </h2>
                        <p>
                          {" "}
                          Rise: <span> {review.price} </span>
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
