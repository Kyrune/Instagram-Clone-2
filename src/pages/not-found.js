import { useEffect } from 'react';

export default function NotFound() {
    // useEffect
    useEffect(() => {
        document.title = 'Not Found - Instagram';
    }, []);

    return (
        <div className="app bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    )
}