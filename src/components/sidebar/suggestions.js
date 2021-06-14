import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

export default function Suggestions({ userId }) {
    const [profiles, setProfiles] = useState(null);

    return !profiles ? (
        <Skeleton count={10} height={150} className="mt-5" /> 
    );
}

Suggestions.propTypes = {
    userId: PropTypes.string
};
