import React from "react";

export default function Article({ article }) {
  return (
    <div>
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
