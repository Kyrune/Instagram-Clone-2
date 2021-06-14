import React, { memo } from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

// Keep memo as example

const Sidebar = () => {
    // Hook ensures only users NOT being followed by User show up in Suggestions
    const { 
        user: { fullName, username, userId } 
    } = useUser();

    // console.log('user', user);
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    );
};

export default memo(Sidebar);

// Sidebar.whyDidYouRender = true