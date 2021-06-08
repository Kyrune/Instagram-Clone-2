import useUser from '../hooks/use-user';

export default function Sidebar() {
    const { user } = useUser();

    // console.log('user', user);
    return (
        <p>I am a sidebar!</p>
    );
}
