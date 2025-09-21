import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VipInfo from './VipInfo';

const Vip = () => {
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
    <VipInfo items={billionaires} />
  )
}

export default Vip