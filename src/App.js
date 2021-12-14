import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setRenderData(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <h1>Hey</h1>
      {renderData.map((post) => (
        <p key={post.id}>
          {post.userId}: {post.title}
        </p>
      ))}
    </div>
  );
}

export default App;
