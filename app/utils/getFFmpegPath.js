import { remote } from 'electron';
import path from 'path';

export default function getFFmpegUrl() {  
  if(process.env.NODE_ENV === 'development') {
    console.log(__dirname)
    return 'ffmpeg\\bin\\ffmpeg.exe';
  }else {
    return path.join(remote.app.getPath('appData'), '..', 'Local', 'Programs', 'multistream', 'app','ffmpeg', 'bin', 'ffmpeg.exe');
  }
}