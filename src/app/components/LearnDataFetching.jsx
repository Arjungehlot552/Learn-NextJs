"use client";

import React, { useState } from "react";
import axios from "axios";

async function fetchData() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data; // Axios stores the actual data in the `data` property
}

const LearnDataFetching = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    setLoading(true); // Show loading state
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
      setIsClicked(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="text-white">
      <button
        onClick={handleFetchData}
        className="flex flex-row items-center justify-center bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Data
      </button>

      {loading && <h1 className="text-center mt-4">Loading...</h1>}

      {isClicked && data.length > 0 && (
        <div className="m-24">
          {data.map((post) => (
            <div className="post text-white mb-4" key={post.id}>
              <h1 className="text-xl font-bold">{post.title}</h1>
              <p className="text-sm">{post.body}</p>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearnDataFetching;
