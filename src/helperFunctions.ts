import { IFeedItem } from './types';

const getFeed = async (count: number = 2, afterId: number | null): Promise<IFeedItem[] | []> => {
    try{
        const response = await fetch(`https://bumble-twitter-interview.herokuapp.com/adam-becker/api?count=${ count }${ afterId ? `&afterId=${ afterId }` : ''}`);
        const data = await response.json();
        return data; 
    } catch(err) {
        return [];
    }
};

export { getFeed };
