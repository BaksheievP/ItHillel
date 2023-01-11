import React from "react";
import AlbumsListItem from "./AlbumsListItem";
function AlbumsList({ list, onOpen }) {
    return (
        <ul>
            {list.map((item) => (
                <AlbumsListItem key={item.id} album={item} onOpen={onOpen} />)

            )}
        </ul>
    )
}


export default AlbumsList;