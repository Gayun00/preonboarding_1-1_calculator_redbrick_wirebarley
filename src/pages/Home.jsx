import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <button type="button">
        <Link to="/mission1">Mission1</Link>
      </button>
      <button type="button"><Link to="/mission2">Mission2</Link></button>
    </div>
  );
}

export default Home;
