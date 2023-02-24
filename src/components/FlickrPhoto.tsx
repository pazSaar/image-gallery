import React, {FC} from 'react';

type FlickrPhotoProps = {
    serverId?: string,
    id?: string,
    secret?: string,
};

const FlickrPhoto: FC<FlickrPhotoProps> = ({serverId, id, secret}) => {

    return(
        <img alt="img"
            src={`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`}/>
    );
};

export default FlickrPhoto;