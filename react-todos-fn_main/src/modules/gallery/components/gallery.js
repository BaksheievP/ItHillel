import usePhotos from "../hooks/usePhotos";
import useAlbums from "../hooks/useAlbums";
import AlbumsList from "./AlbumsList";
import PhotosList from "./PhotosList";
import { useEffect, useState } from "react";

function Gallery() {
    const [currentAlbum, setcurrentAlbum] = useState(null);
    const albums = useAlbums();
    const photos = usePhotos(currentAlbum);

    useEffect(() => {
        if (!albums.length) return
        setcurrentAlbum(albums[0].id);
    }, [albums])


    return <div className='row'>
        <div className='three columns'>
            <AlbumsList list={albums} onOpen={setcurrentAlbum} />
        </div>
        <div className='nine columns'>
            <PhotosList list={photos} />
        </div>



    </div>
}

export default Gallery;