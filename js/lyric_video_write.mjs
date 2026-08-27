import { audio_file_duration } from "./audio_file_duration.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_write(
  path_audio,
  path_subtitles,
  path_output,
  width,
  height,
) {
  "$plain path_audio";
  "$plain path_subtitles";
  "$plain path_output";
  "$plain width";
  "$plain height";
  "Puts a song and a subtitle file together into one video: the words on black, in time, with the song heard under them.";
  "There is no picture to read. The frames are made here, out of nothing but a colour, so the whole video is the words - which is what a lyric video is, and it also means the file stays small enough to send whatever the song costs.";
  "THE LENGTH IS ASKED OF THE SONG AND SAID OUT LOUD TO THE TOOL. A frame source made out of a colour never ends, and left to itself the tool keeps drawing black for a couple of seconds past the last note. Being told to stop short is the only thing that has been seen to stop it.";
  "The instruction goes over as a list of words rather than as a line of text. A subtitle instruction carries brackets and an equals sign, and a line of text holding those cannot be split back into words safely, so it would be unsendable. The song's path is a word in that same list for the plainer reason that a song is usually called something with a space in it.";
  let duration = await audio_file_duration(path_audio);
  let size = width + "x" + height;
  let color = "color=c=black:s=" + size + ":r=30";
  let subtitles = "ass=" + path_subtitles;
  let v = String(duration);
  let words = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-f",
    "lavfi",
    "-i",
    color,
    "-i",
    path_audio,
    "-t",
    v,
    "-vf",
    subtitles,
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "18",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-b:a",
    "256k",
    "-movflags",
    "+faststart",
    path_output,
  ];
  let ran = await ffmpeg_words_run(words);
  return ran;
}
