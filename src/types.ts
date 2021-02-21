interface IFeedItem {
    image: string
    id: number
    text: string
    username: string
    timeStamp: number
}

interface IImageErrorEvent {
    target: {
        src: string
    }
}

type LastFeedId = number | null;

export {
    IFeedItem,
    LastFeedId,
    IImageErrorEvent
}