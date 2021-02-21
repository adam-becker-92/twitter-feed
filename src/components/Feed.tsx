import React, {useState, useEffect} from 'react';
import { getFeed } from '../helperFunctions';
import { IFeedItem, LastFeedId } from '../types';
import Post from './Post';
const REFRESH_RATE = 2000;
 
const Feed = () => {
    const [lastFeedId, setLastFeedId] = useState<LastFeedId>(null);
    const [feed, updateFeed] = useState<IFeedItem[]>([]);
    useEffect(() => {
        const getInitialFeed = async () => {
            const updatedFeed = await getFeed(2, lastFeedId);
            if(updatedFeed.length) {
                updateFeed([
                    ...updatedFeed,
                    ...feed
                ]);

                const lastId = updatedFeed[0].id;
                setLastFeedId(lastId);
            }
        }
        setTimeout(getInitialFeed, lastFeedId ? REFRESH_RATE : 0)
    }, [ lastFeedId ]);
    return <div className="feed">
        { feed.map((post) => <Post key={post.id} {...post} />) }
    </div>
};

export default Feed;
 