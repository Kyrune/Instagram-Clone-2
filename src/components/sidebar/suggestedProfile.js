import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SuggestedProfile({ userDocId, username, profileId, userId }) {
    const [followed, setFollowed] = useState(false);

    return;
}

SuggestedProfile.propTypes = {
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}
