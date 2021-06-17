import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

export default function Timeline() {
    // Get the logged in user's photo
    const { photos } = usePhotos();
    return (
        <div className="container col-span-2">
            <p>I am the timeline</p>
        </div>
    );
}
