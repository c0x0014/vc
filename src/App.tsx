import './App.css';
import { Component } from 'react';
import YouTube from 'react-youtube';
import './YouTubePlayer.css';
import button from "./assets/button.png";
export default class App extends Component {
  opts = {
    playerVars: {
      autoplay: 1,
      playsinline: 1,
      cc_load_policy: 0,
      rel: 0, fs: 1,
      controls: 0,
      enablejsapi: 1,
      modestbranding: 1,
      disablekb: 1,
      autohide: 1,
      loop: 0,
      volume: 0,
      iv_load_policy: 3
    }
  }

  onReady(event : any) {
    event.target.mute();
    event.target.playVideo();
  }
  onEnd(event : any) {
    event.target.stopVideo();
    window.location.href = 'https://my.matterport.com/show/?m=GnraFBAGbgW';
  }

  render() {
  return (
    <div>
    <div className='youtube-container'>
      <YouTube className='youtube-video'
               videoId='-o92gCY58pk'
               opts={this.opts}
               onReady={this.onReady}
               onEnd={this.onEnd}
      />
    </div>

    <div id="navi">
    <a href="https://my.matterport.com/show/?m=GnraFBAGbgW">
    <img src={button} alt="動画をスキップ"/>

    </a>
  </div>
  </div>
  )
  }
}
