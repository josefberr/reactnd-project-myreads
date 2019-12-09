import React from 'react';
import { Link } from 'react-router-dom';

const ErrorNotFound = () => (
  <div>
    <h1 className="title-not-found">
      Sorry, but we can't find what you are looking for
    </h1>
    <div className="root-link">
      <Link to="/">Go back and try again</Link>
    </div>
  </div>
);

export default ErrorNotFound;