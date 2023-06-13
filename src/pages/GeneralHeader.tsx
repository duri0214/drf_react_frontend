import React from 'react';
import { Link } from 'react-router-dom';

const GeneralHeader: React.FC = () => {
  return(
    <div>
      <Link to='/'>Top</Link>
      <ul>
        <li><Link to='/daily_report'>日報</Link></li>
        <li><Link to='/profile'>プロフィール</Link></li>
      </ul>
    </div>
  )
}

export default GeneralHeader
