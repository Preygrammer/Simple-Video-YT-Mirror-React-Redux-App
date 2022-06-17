// export default function (state = null, action) {
//   switch (action.type) {
//     case "VIDEO_SELECTED":
//       console.log("This is the action payload", action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default function () {
  return [
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
  ];
}
