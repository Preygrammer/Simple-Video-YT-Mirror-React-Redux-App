import "../styles.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "../containers/VideoDetails";
import VideoList from "../containers/VideoList";

export default function App() {
  const [current, setCurrent] = useState({
    videos: [
      {
        id: 1,
        url: "JAxrfkdcqcg",
        thumbnail:
          "https://i.ytimg.com/vi/JAxrfkdcqcg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMenfWsBuTx4vw0EyDijyEheDSYA",
        title: "Fresh ducks | Martin Miller",
        description:
          "Here's one last video from our live session at Off The Road Studios before Xmas",
        channelName: "Martin Miller",
        dateUploaded: "2021-05-21",
        totalViews: 4210239
      },
      {
        id: 2,
        url: "49Rw0U6_cQo",
        thumbnail:
          "https://i.ytimg.com/vi/49Rw0U6_cQo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDFV-kwXFhgkgl3CAFB6B9NBVEQA",
        title: "Blues for the rabbit | Paul Gilbert",
        description: "Paul Gilbert - Blues For Rabbit (Behold Electric Guitar)",
        channelName: "Paul Gilbert",
        dateUploaded: "2020-01-15",
        totalViews: 22210239
      }
    ],
    selectedVideo: []
  });

  const selectVideo = (video) => {
    setCurrent((prevState) => ({
      ...prevState,
      selectedVideo: video
    }));

    console.log(current.selectedVideo);
  };

  useEffect(() => {
    setCurrent((prevState) => ({
      ...prevState,
      selectedVideo: "https://www.youtube.com/embed/" + current.videos[0].url
    }));
  }, [current.videos]);

  return (
    <div className="App">
      <SearchBar />

      <div className="video-container">
        <VideoDetails video={current.selectedVideo} />
        <VideoList
          onVideoSelect={(video) => selectVideo(video)}
          videos={current.videos}
        />
      </div>
    </div>
  );
}
