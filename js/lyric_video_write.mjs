import { audio_file_duration } from "./audio_file_duration.mjs";
import { lyric_video_filter_text } from "./lyric_video_filter_text.mjs";
import { lyric_video_pictures_words } from "./lyric_video_pictures_words.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_write(
  path_audio,
  path_subtitles,
  path_output,
  width,
  height,
  pictures,
) {
  "$plain path_audio";
  "$plain path_subtitles";
  "$plain path_output";
  "$plain width";
  "$plain height";
  "$plain pictures";
  "Puts a song, a subtitle file and whatever pictures were asked for together into one video: the words in time over black, the pictures behind them, and the song heard under all of it.";
  "THE GROUND IS STILL MADE HERE OUT OF NOTHING BUT A COLOUR, and the pictures are laid on it rather than replacing it. A song given no pictures is therefore the video this made before there were any, and so is every stretch of a song no picture was given - which is what lets a passage that was already timed and watched be re-rendered without anybody wondering what changed. It also keeps the file small when there is nothing to show, because black costs almost nothing to store.";
  "THE LENGTH IS ASKED OF THE SONG AND SAID OUT LOUD TO THE TOOL. A frame source made out of a colour never ends, and neither does a picture asked to repeat, so left to itself the tool keeps drawing past the last note. Being told to stop short is the only thing that has been seen to stop it.";
  "WHAT CARRIES THE SOUND IS NAMED RATHER THAN LEFT TO BE PICKED. Handed a plain list of inputs the tool chooses the sound itself and chooses right, but naming the finished frames by label turns that choosing off for everything at once - so the song has to be named in the same breath or the video comes out silent. It is named by the number it was given, which is why the pictures are opened after it and never before.";
  "The instruction goes over as a list of words rather than as a line of text. The picture instruction carries brackets, semicolons, quotes and an equals sign, and a line of text holding those cannot be split back into words safely, so it would be unsendable. The song's path is a word in that same list for the plainer reason that a song is usually called something with a space in it.";
  let duration = await audio_file_duration(path_audio);
  let size = width + "x" + height;
  let color = "color=c=black:s=" + size + ":r=30";
  let filter = lyric_video_filter_text(pictures, width, height, path_subtitles);
  let opened = lyric_video_pictures_words(pictures);
  let v = String(duration);
  let ground = [
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
  ];
  let rest = [
    "-t",
    v,
    "-filter_complex",
    filter,
    "-map",
    "[out]",
    "-map",
    "1:a",
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
  let words = list_concat_multiple([ground, opened, rest]);
  let ran = await ffmpeg_words_run(words);
  return ran;
}
