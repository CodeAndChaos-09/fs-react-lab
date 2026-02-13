import React from "react";

function Library() {
  const books = [
    { id: 1, title: "React Basics", author: "Dan Abramov", category: "Programming" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering" },
    { id: 3, title: "AI Fundamentals", author: "Andrew Ng", category: "Artificial Intelligence" }
  ];

  return (
    <div className="page">
      <h2>Library Management</h2>

      <div className="grid">
        {books.map(book => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
