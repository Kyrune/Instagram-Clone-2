import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
    // Get the logged in user's photo
    const { photos } = usePhotos();

    // console.log('photos', photos);
    return (
        <div className="container col-span-2">
            {/* Nested turnary */}
            {!photos ? (
                // Timestamp ~6:02:00
                <>
                    <Skeleton count={1} width={640} height={500} className="mb-5" />
                </>
            ) : photos && photos.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content} />)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    );
}
