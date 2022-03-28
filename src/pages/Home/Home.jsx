import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../../components/Search/SearchBar";
import "./Home.css";

const Home = () => {
  const [results, setResults] = useState();

  const handleSearch = async (keyword) => {
    const response = await axios.get(
      `https://dummyjson.com/posts/search?q=${keyword}`
    );
    setResults(response.data.posts);
  };

  console.log(results);

  return (
    <div className="container">
      <SearchBar handleSearch={handleSearch} />
      {results?.map((result) => (
        <div key={result.id}>
          <h5>{result.title}</h5>
          <p>{result.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
