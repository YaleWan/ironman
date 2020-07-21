import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

export default function Counter() {
  useEffect(() => {
    document.title = '123';
  });
  return (
    <div>
      <Link to={routes.HOME}>to Counter</Link>
      counter
    </div>
  );
}
