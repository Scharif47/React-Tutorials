const authors = [
  {
    name: "Jacky",
    books: ["Back", "Red", "Orange"],
  },
  {
    name: "Tommy",
    books: ["White", "Gray", "Silver"],
  },
  {
    name: "Ryan",
    books: ["Lion", "Turtles", "Fox"],
  },
  {
    name: "Becks",
    books: ["Fighter", "Coder", "Driver"],
  },
];

function App() {
  return (
    <div className="App" style={{marginLeft: "2rem"}}>
      {authors.map((author) => (
        <div key={author.name}>
          <h1>Author: {author.name}</h1>
          <h2>Books: {author.books.map((book => (
            <p style={{display: "inline", marginRight: "1rem", borderBottom: "1px solid black"}}>{book}</p>
          )))}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
