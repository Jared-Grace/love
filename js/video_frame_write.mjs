import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function video_frame_write(video_path, seconds, path_to) {
  "$plain video_path";
  "$plain seconds";
  "$plain path_to";
  "Saves the one frame showing at that many seconds into a video as a picture, overwriting what was there.";
  let command_words = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-ss",
    "" + seconds,
    "-i",
    video_path,
    "-frames:v",
    "1",
    "-update",
    "1",
    path_to,
  ];
  let ran = await ffmpeg_words_run(command_words);
  return ran;
}
