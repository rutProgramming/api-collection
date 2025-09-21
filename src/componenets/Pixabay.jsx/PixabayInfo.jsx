import React from "react";

const PixabayInfo = ({ item }) => {
  if (!item || item.length === 0) {
    return <p className="text-center mt-3">There are no images</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {item.map((img) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={img.id}>
            <div className="card h-100">
              <img
                src={img.webformatURL}
                className="card-img-top"
                alt={img.tags}
              />
              <div className="card-body">
                <p className="card-text text-truncate">{img.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixabayInfo;
