import React, {FC, useEffect, useRef, useState} from 'react';
import FlickrPhoto from "./FlickrPhoto";
import LoadingAnimation from "./LoadingAnimation";

type GalleryProps = {
    filterText?: string;
};

type flickerImage = {
    id?: string,
    owner?: string,
    secret?: string,
    server?: string,
    farm?: number,
    title?: string,
    ispublic?: number,
    isfriend?: number,
    isfamily?: number
}

const Gallery: FC<GalleryProps> = ({filterText}) => {

    const apiKey = '15b67c2a8b4288ff1fddf5eb56655cfb';
    const pageNum = 1;
    const flickrAPICall = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=18&api_key=${apiKey}&content_type=1&is_getty=1&text=${filterText}&page=${pageNum}`
    const [flickrImages, setFlickrImage] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=> {
        setIsLoading(true)
        fetch(flickrAPICall).
            then(response => {
                return response.json()
        })
            .then(images => {
                setFlickrImage(images.photos.photo);
            })
            .catch(error =>{
                console.error(`Flickr images could not be fetched due to error: ${error.message}`)
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }, [filterText])

    return (
        isLoading
        ? <LoadingAnimation />
        : flickrImages.length > 0
            ?<div className="grid grid-cols-5 gap-4">
                    {flickrImages.map((image: flickerImage, index) =>
                        <FlickrPhoto key={image.id} serverId={image.server} id={image.id} secret={image.secret} title={image.title}/>)
                    }
            </div>
            : <span className="flex items-center	justify-center">No Images Found</span>
    )
};

export default Gallery;