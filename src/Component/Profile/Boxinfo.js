import React from "react";

const Boxinfo = () => {
  return (
    <div>
      <div className="row">
        <div className="offset-1 col-lg-4  bg-primary text-center boxinfocss">
          <span>10</span>
          <p>Total Blog</p>
        </div>
        <div className="offset-2 col-lg-4 bg-info text-center boxinfocss">
          <span>50</span>
          <p>Total Video</p>
        </div>
        <div className="offset-1 mt-2 col-lg-4 bg-info text-center boxinfocss">
          <span>30</span>
          <p>Total Item</p>
        </div>
        <div className="offset-2 mt-2 col-lg-4 bg-info text-center boxinfocss">
          <span>5</span>
          <p>Total Video</p>
        </div>
      </div>
    </div>
  );
};

export default Boxinfo;
