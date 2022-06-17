import CalculateViews from "../totalViewsFormatter";
import DiffDate from "../diffDate";

export default function VideoListItem({
  onVideoSelect,
  thumbnail,
  title,
  channelName,
  dateUploaded,
  totalViews,
  url
}) {
  const videoUrl = "https://www.youtube.com/embed/" + url;

  return (
    <li>
      <div
        className="thumbnail-wrapper"
        onClick={() => onVideoSelect(videoUrl)}
      >
        <div className="media-thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="media-details">
          <div className="media-title">{title}</div>
          <div className="media-channel-name">{channelName}</div>
          <div className="media-more-info">
            {CalculateViews(totalViews) + " views"} &bull;{" "}
            {DiffDate(dateUploaded)}
          </div>
        </div>
      </div>
    </li>
  );
}
