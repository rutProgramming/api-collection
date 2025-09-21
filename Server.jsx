import axios from "axios";

const API_URL = "https://pixabay.com/api/";
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

export const fetchPixabayImages = async (query) => {
  const storageKey = `pixabay_${query}`;

  const cached = localStorage.getItem(storageKey);
  if (cached) {
    console.log("Loaded from localStorage:", query);
    return JSON.parse(cached);
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
      },
    });

    const data = response.data.hits;

    localStorage.setItem(storageKey, JSON.stringify(data));

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data from Pixabay");
  }
};
