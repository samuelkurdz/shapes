// eslint-disable-next-line no-use-before-define
import React from 'react';
import './home.scss';
import Filters from '../../components/filters/filters';
import PreviewContainer from '../../components/preview-container/preview-container';

const HomePage = () => {
  return (
    <div className="max-App-View home-page">
      <Filters />
      <PreviewContainer />
    </div>
  );
};

export default HomePage;
