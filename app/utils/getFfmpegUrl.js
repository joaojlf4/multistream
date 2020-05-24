export default function getFFmpegUrl() {
  let url = '';
  switch (process.platform) {
    case 'darwin':
      url = 'https://ffmpeg.zeranoe.com/builds/macos64/static/ffmpeg-latest-macos64-static.zip';
      break;
    case 'win32':
      url = 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip' || 'https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.zip';
      break;
    case 'linux':
      url = 'https://johnvansickle.com/ffmpeg/builds/ffmpeg-git-i686-static.tar.xz';
      break;
    default:
      url = 'http://ffmpeg.org/download.html';
      break;
  }
  return url;
}