import React from 'react';
import { Link } from 'react-router-dom';
import GovHeader from './common/header';
import GovFooter from './common/footer';

const Home: React.FC = () => {
    return (
        <div>
          <GovHeader/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/info">Info</Link>
              </li>
              <li>
                <Link to="/benefits">Benefits</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
          </nav>
          <GovFooter/>
        </div>
    );
}

export default Home;