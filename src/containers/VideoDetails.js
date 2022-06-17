import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

export function VideoDetails({ video }) {
  return (
    <div className="player-wrapper">
      <iframe title={video.title} height="300" width="500" src={video}></iframe>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

// function mapDispatchToProps(dispatch) {

// }

export default connect(mapStateToProps)(VideoDetails);
