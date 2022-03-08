import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {name}
    </h2>

    {age > 0 && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    <p className="Person__partner">
      {
        isMarried ? (
          `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
        ) : (
          'I am not married'
        )
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: 0,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
