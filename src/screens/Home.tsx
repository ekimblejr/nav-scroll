import React from 'react';

export interface PageProps {
  page: string;
}

const Home = ({page}: PageProps) => {
  return (
    <div id={page} style={{height: '100%', backgroundColor: '#DAF7A6'}}>{page}</div>
  );
};

export default Home;
