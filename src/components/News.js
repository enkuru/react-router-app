import React from 'react';

const News = ({match}) => {
  return (<h1>News Page {match.params.id}</h1>)
};

export default News;