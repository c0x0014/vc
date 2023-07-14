import './App.css'
import { Component } from 'react';
import YouTube from 'react-youtube'
// R24FWaSw4GU
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
      <h1>Hello</h1>
      <YouTube videoId='R24FWaSw4GU'
               opts={this.opts}
               onReady={this.onReady}
               onEnd={this.onEnd}
      />
    </>
  )
  }
}