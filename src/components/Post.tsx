import React, { SyntheticEvent } from 'react';
import { IFeedItem } from '../types';
import placeholder from '../images/placeholder.png';
 
const Post = (post: IFeedItem) => {
    return <div className="post">
        <img className="post__image" src={ post.image } onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            console.log("error fetching image");
            const target = e.target as HTMLImageElement;
            target.src = placeholder;
        }} />
        <div className="post__content">
            <div className="post__content-username">{ post.username }</div>
            <div className="post__content-text">{ post.text }</div>
        </div>
    </div>;
};

export default Post;
 