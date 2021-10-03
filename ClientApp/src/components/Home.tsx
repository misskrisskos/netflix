import * as React from 'react';
import { connect } from 'react-redux';
import requests from '../requests';
import Banner from './Banner';
import RowMovie from './RowMovie';

const Home = () => (
  <div>
    <Banner className="mt-5" />
    <RowMovie title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
    <RowMovie title="Trending Now" fetchURL={requests.fetchTrending} />
    <RowMovie title="Action Movies" fetchURL={requests.fetchActionMovies} />
    <RowMovie title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    <RowMovie title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    <RowMovie title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    <RowMovie title="Documentaries" fetchURL={requests.fetchDocumentaries} />
  </div>
);

export default connect()(Home);
