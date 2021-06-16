import React, { memo } from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

// Keep memo as example

const Sidebar = () => {
    // Hook ensures only users NOT being followed by User show up in Suggestions
    const { 
        user: { docId, fullName, username, userId, following } 
    } = useUser();

    // console.log('docId', docId);

    // console.log('user', user);
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
        </div>
    );
};

export default memo(Sidebar);
