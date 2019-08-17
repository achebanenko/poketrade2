import React from 'react';
import Fetch from './Fetch';
import SetsList from './SetsList';
import SetsSeries from './SetsSeries';
import { availableSeries, filterSeries } from '../selectors';

const Sets = () => {
  return (
    <Fetch 
      type="sets"
      render={({ data, isLoading, filter }) => (
        <div className="container">
          <SetsSeries series={availableSeries(data.sets)} active={filter.setsSeries} />
          <SetsList data={filterSeries(data.sets, filter.setsSeries)} isLoading={isLoading} filter={filter} />
        </div>
      )} 
    />
  );
};

export default Sets;