import axios from "axios";

const API_URL = "https://pixabay.com/api/";
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

const DEFAULT_QUERY = "clouds";
const STORAGE_KEY = "pixabay_last_query";
const STORAGE_DATA_KEY = "pixabay_last_data";

export const fetchPixabayImages = async (query) => {
  let effectiveQuery = query;

  if (!effectiveQuery) {
    const lastQuery = localStorage.getItem(STORAGE_KEY);
    if (lastQuery) {
      effectiveQuery = lastQuery;
    } else {
      effectiveQuery = DEFAULT_QUERY;
    }
  }

  const cachedQuery = localStorage.getItem(STORAGE_KEY);
  const cachedData = localStorage.getItem(STORAGE_DATA_KEY);

  if (cachedQuery === effectiveQuery && cachedData) {
    console.log("Loaded from localStorage:", effectiveQuery);
    return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: effectiveQuery,
        image_type: "photo",
      },
    });

    const data = response.data.hits;

    localStorage.setItem(STORAGE_KEY, effectiveQuery);
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data));

    console.log("Fetched from API:", effectiveQuery);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data from Pixabay");
  }
};
