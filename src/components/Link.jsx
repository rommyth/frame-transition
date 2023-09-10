import { Link as ReacLink } from 'react-router-dom';

/**
 *
 * @param {import('react-router-dom').LinkProps} props
 * @param {string} props.to
 * @returns
 */

const Link = ({ to, ...props }) => {
  return <ReacLink to={to} {...props} />;
};

export default Link;
