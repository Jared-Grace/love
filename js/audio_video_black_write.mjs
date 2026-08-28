import { audio_file_duration } from "./audio_file_duration.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function audio_video_black_write(
  path_audio,
  path_output,
  width,
  height,
) {
  "$plain path_audio";
  "$plain path_output";
  "$plain width";
  "$plain height";
  "Turns a recording into a film of it: the sound, and a picture that is nothing but black for as long as the sound lasts.";
  "IT EXISTS BECAUSE SOMEWHERE THAT ONLY TAKES FILMS IS THE PLACE THE MUSIC HAS TO GO. A song on its own cannot be sent to one of those, and the cheapest picture that satisfies them is no picture at all. Black is also the ground every other picture in this repo stands on, so a song sent this way and a song sent with words over it look like the same thing with one of them missing, rather than like two different things.";
  "THE LENGTH IS ASKED OF THE RECORDING AND SAID OUT LOUD TO THE TOOL. Frames made out of a colour never run out, so left alone the tool keeps drawing black after the last note and, worse, has no reason to ever stop. The one thing seen to stop it is being told the number.";
  "THE SOUND IS CARRIED ACROSS WITHOUT BEING THROWN AWAY AGAIN. The recordings this is given have already been compressed once, and compressing the result of that a second time loses a little more for nothing - the picture is black, so the sound is the entire file and there is nothing to save room for. The lossless codec named here is one the film container genuinely accepts; the obvious lossless choice is not.";
  "The instruction goes over as a list of words rather than as a line of text, because a song is usually called something with spaces in it and the colour is described with punctuation a line would be split on.";
  "The index is moved to the front, so a player can begin before it holds the whole file.";
  "It says yes to overwriting in advance, because otherwise the tool asks on the terminal and waits for an answer nobody is there to give.";
  let duration = await audio_file_duration(path_audio);
  let size = width + "x" + height;
  let color = "color=c=black:s=" + size + ":r=30";
  let seconds = String(duration);
  let words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-f",
    "lavfi",
    "-i",
    color,
    "-i",
    path_audio,
    "-map",
    "0:v:0",
    "-map",
    "1:a:0",
    "-t",
    seconds,
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "18",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "alac",
    "-sample_fmt",
    "s16p",
    "-dither_method",
    "triangular_hp",
    "-movflags",
    "+faststart",
    path_output,
  ];
  await ffmpeg_words_run(words);
  return path_output;
}
