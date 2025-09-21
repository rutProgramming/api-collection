import React, { useEffect, useState } from "react";
import PixabayInput from "./PixabayInput";
import PixabayInfo from "./PixabayInfo";
import axios from "axios";
const Pixabay = () => {
  const [infoItem, setInfoItem] = useState([]);

  useEffect(() => {
    doApi("clouds");
  }, []);

  const doApi = async (_item) => {
    setInfoItem([]);
    const url = "https://pixabay.com/api/";

    try {
      const response = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_PIXABAY_API_KEY,
          q: _item,
          image_type: "photo",
        },
      });

      setInfoItem(response.data.hits);
    } catch (err) {
      console.log(err);
      alert("There is a problem, come back later");
    }
  };

  return (
    <div className="container">
      <PixabayInput doApi={doApi} />
      <PixabayInfo item={infoItem} />
    </div>
  );
};

export default Pixabay;
