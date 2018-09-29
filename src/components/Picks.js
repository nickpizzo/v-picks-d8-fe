import React from 'react';
import PropTypes from 'prop-types';

const Picks = (props) => {
    return !props.loading && props.picks.map(pick => (
      <div key={pick.nid}>
        <span>{pick.title}</span>
        <button onClick={() => {props.deletePick(pick.nid)}}>X</button>
      </div>
    ));
};

Picks.propTypes = {
  picks: PropTypes.array
};

Picks.defaultProps = {
  picks: [],
};

export default Picks;