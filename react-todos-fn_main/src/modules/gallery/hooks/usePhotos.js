import { useEffect, useState } from "react";
import api from "../../../api";

export default function usePhotos(albumsId) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if(albumsId === null) return;
        api.get('photos?albumId=' + albumsId).then(({ data }) =>
            setPhotos(data)
        );
    }, [albumsId])

    return photos;
}