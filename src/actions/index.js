//So mao ni ang ma call sa dispatch tas mao ni ang
//action nga ma return
export function selectVideo(video) {
  return {
    type: "VIDEO_SELECTED",
    payload: video
  };
}
