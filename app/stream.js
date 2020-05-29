import NodeMediaServer from 'node-media-server';
import removeBarOfRtmpUrl from './utils/removeBarRtmpUrl';
import path from 'path';
import { remote } from 'electron';

export default function(data) {
  console.log(data)
  const streams = data.map(stream => ({
    endpoint: removeBarOfRtmpUrl(stream.endpoint),
    key: stream.key,
  }))

  const config = {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8000,
      allow_origin: '*'
    },
    relay: {
      // C:\Users\Usuario\Desktop\multistream\node_modules\.bin\ffmpeg.exe
      ffmpeg: path.join(remote.app.getPath('appData'), '..', 'Local', 'Programs', 'multistream', 'app', 'ffmpeg', 'bin', 'ffmpeg.exe'),
      tasks: streams.map(stream => ({
        app: 'live',
        mode: 'push',
        edge: `${stream.endpoint}/${stream.key}`,
      }))
    },
  };

  const nms = new NodeMediaServer(config);
  return nms;
}

// {
//   app: 'live',
//   mode: 'push',
//   edge: 'rtmp://a.rtmp.youtube.com/live2/keyyoutube',
// },