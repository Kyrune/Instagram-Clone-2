import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) =>
    !username || !fullName ? (
        <Skeleton count={1} height={61} />
    ) : (
 
    );

export default User;

User.propTypes = {
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
};
