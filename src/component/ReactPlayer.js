import React, {Component} from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
    render() {
        return(
            <ReactPlayer url={this.props.video} playing={false} />
        )
    }
}
export default VideoPlayer