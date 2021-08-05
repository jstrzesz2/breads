const React = require('react');
const Default = require('./layouts/default');

const Error = () => {
  return (
    <Default>
      <h1>404: Error</h1>
      <a href="/breads">Go home</a>
    </Default>
  );
};

module.exports = Error;
