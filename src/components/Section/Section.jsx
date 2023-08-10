import React from 'react';
import propTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section className="text-center block w-5/12 mb-4 ml-auto mr-auto mt-5">
      <h2 className="max-w-lg text-3xl font-semibold leading-loose text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;
