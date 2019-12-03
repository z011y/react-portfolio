import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h2>We couldnt find that page</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
