import React, { useEffect, useState } from "react";
import PixabayInput from "./PixabayInput";
import PixabayInfo from "./PixabayInfo";
import { fetchPixabayImages } from "../../../Server";

const Pixabay = () => {
  const [infoItem, setInfoItem] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async (_item) => {
    setInfoItem([]); 
    try {
      const data = await fetchPixabayImages(_item);
      setInfoItem(data);
    } catch (err) {
      console.error(err);
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
