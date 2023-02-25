import React, {FC} from 'react';

type FlickrPhotoProps = {
    serverId?: string,
    id?: string,
    secret?: string,
    title?: string,
};

const FlickrPhoto: FC<FlickrPhotoProps> = ({serverId, id, secret, title}) => {

    return(
        <img className="w-full h-48 object-cover border-solid border-4 border-yellow-300" alt={title}
            src={`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`}/>
    );
};

export default FlickrPhoto;