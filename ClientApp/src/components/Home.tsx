import * as React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import RowMovie from './RowMovie';

const Home = () => (
  <div>
    <Banner className="mt-5" />
    <RowMovie title="test" />
    <RowMovie title="test" />
    <RowMovie title="test" />
    <RowMovie title="test" />

  </div>
);

export default connect()(Home);
