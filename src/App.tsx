import './App.css'
import { Component } from 'react';
import YouTube from 'react-youtube'
export default class App extends Component {
  style = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  }
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
    },
    ...this.style
  }

  onReady(event : any) {
    event.target.mute();
    event.target.playVideo();
  }
  onEnd(event : any) {
    event.target.stopVideo();
    window.location.href = 'https://my.matterport.com/show/?m=t9Enf7kMpTu';
  }

  render() {
  return (
    <>
      <h1>CUC Digital Open Campus</h1>
      <YouTube videoId='YEWEVXEt0ko'
               opts={this.opts}
               onReady={this.onReady}
               onEnd={this.onEnd}
      />
    </>
  )
  }
}
