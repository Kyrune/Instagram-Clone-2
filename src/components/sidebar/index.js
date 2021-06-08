import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

export default function Sidebar() {
    // Ensures only users NOT being followed by User show up in Suggestions
    const { 
        user: { fullName, username, userId } 
    } = useUser();

    // console.log('user', user);
    return (
        <div className="p-4">
            <User usename={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    );
}
