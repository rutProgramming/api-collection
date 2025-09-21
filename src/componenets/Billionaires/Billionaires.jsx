import React, { useState, useEffect } from "react";
import axios from "axios";

const Billionaires = () => {
  const [billionaires, setBillionaires] = useState([]);

  useEffect(() => {
    const fetchBillionaires = async () => {
      try {
        const url = "https://expressrichpepole.onrender.com/";
        const response = await axios.get(url);
        setBillionaires(response.data);
      } catch (err) {
        console.error(err);
        alert("Problem fetching billionaires data, try again later.");
      }
    };

    fetchBillionaires();
  }, []);

  if (!billionaires || billionaires.length === 0) {
    return <p className="text-center mt-3">No billionaires to display</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {billionaires.map((billionaire) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={billionaire.id}>
            <div className="card h-100">
              <img
                src={billionaire.image}
                className="card-img-top"
                alt={billionaire.name}
              />
              <div className="card-body">
                <h5 className="card-title">{billionaire.name}</h5>
                <p className="card-text">
                  <strong>Worth:</strong> {billionaire.worth} <br />
                  <strong>Year:</strong> {billionaire.birth_year} <br />
                  <strong>Source:</strong> {billionaire.source} <br />
                  <strong>Country:</strong> {billionaire.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billionaires;
