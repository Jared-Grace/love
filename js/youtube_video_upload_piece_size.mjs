import { multiply } from "./multiply.mjs";
export function youtube_video_upload_piece_size() {
  "How many bytes go up in one request of a resumable upload.";
  "★ PIECES, BECAUSE ONE LONG REQUEST KEPT LOSING ITS ANSWER. On 2026-10-08 films of 51 and 57 MB sent as one PUT reached YouTube whole five times while the connection was reset before the reply came back, each leaving a video stuck processing and no id in hand. A piece gets its answer in seconds, so nothing waits long enough to be cut. YouTube requires a multiple of 256 KiB; 8 MiB keeps the request count near seven for a one-minute film.";
  let left = multiply(8, 1024);
  let r = multiply(left, 1024);
  return r;
}
