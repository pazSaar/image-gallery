import React, {FC, useEffect, useState} from 'react';
import FlickrPhoto from "./FlickrPhoto";

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

    const flickrAPICall = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=18&api_key=15b67c2a8b4288ff1fddf5eb56655cfb&content_type=1&is_getty=1&text=${filterText}`
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
        isLoading ? <span>images is being loaded</span>
        : <>
            {flickrImages.map((image: flickerImage, index) =>
                <FlickrPhoto serverId={image.server} id={image.id} secret={image.secret}/>)
            };
        </>
    )
};

export default Gallery;