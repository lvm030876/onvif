Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.125/user=admin_password=tlJwpbo6_channel=1_stream=0.sdp?real_stream',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-s': '640x360'
  }
})
stream2 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.123/user=admin_password=tlJwpbo6_channel=1_stream=0.sdp?real_stream',
  wsPort: 9998,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-s': '640x360'
  }
})