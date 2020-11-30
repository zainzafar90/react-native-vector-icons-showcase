import PropTypes from 'prop-types';

import IconFamilies from '../generated/glyphmapIndex.json';

const Icon = props => {
  return (
    <span style={{ fontFamily: props.family }} {...props}>
      {String.fromCodePoint(IconFamilies[props.family][props.name])}
    </span>
  );
};

Icon.propTypes = {
  family: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Icon;
