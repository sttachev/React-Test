import React, { Fragment } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../data";
import AllElement from "../album-element/indexfav";

const renderAlbums = (albums) => {
    return albums.map(album => {
        return (<AllElement key={album.albumId} {...album} />)
    })
}

const AllList = ({ albums }) => {
    return (
        <Fragment>
            <div className="container">
                {renderAlbums(data)}
            </div>
        </Fragment>
    )
}

export default AllList;


