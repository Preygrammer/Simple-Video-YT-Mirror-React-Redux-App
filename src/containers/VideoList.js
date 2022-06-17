import VideoListItem from "../components/VideoListItem";

export default function VideoList({ videos, onVideoSelect }) {
  const videoItem = videos.map((video) => {
    return (
      <VideoListItem
        key={video.id}
        url={video.url}
        thumbnail={video.thumbnail}
        title={video.title}
        description={video.description}
        channelName={video.channelName}
        dateUploaded={video.dateUploaded}
        totalViews={video.totalViews}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div className="media-right">
      <ul>{videoItem}</ul>
    </div>
  );
}
