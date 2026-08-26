import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_video_audio_replace_write(
  path_video,
  path_audio,
  path_out,
) {
  "$plain path_video";
  "$plain path_audio";
  "$plain path_out";
  "put a different recording into a film in place of the sound already in it, and save that as a new film";
  "THE PICTURE IS COPIED ACROSS RATHER THAN REDRAWN. Nothing is being asked of the picture, so decoding and re-encoding it would spend minutes to arrive at a worse copy of what was already there. Copied, the frames that come out are the frames that went in, and the run takes seconds.";
  "THE SOUND IS STORED LOSSLESSLY, so the film carries exactly the samples handed to it. This is the shape to reach for when the film is going on to somewhere that will compress it again - a service that re-encodes what it is given should be given something that has not already been thrown away once. The lossless codec used here is one the film container genuinely accepts; the obvious lossless choice is not, and a container that refuses a codec fails late and confusingly.";
  "IT SAYS WHICH STREAMS IT WANTS rather than letting them be guessed, because handed two files with sound in both, the guess is to take the first one - which is the sound being replaced.";
  "The index is moved to the front of the file, so a player can start before it has the whole thing.";
  "It says yes in advance to overwriting, because ffmpeg otherwise asks that question on the terminal and waits for an answer that is never coming.";
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_video,
    "-i",
    path_audio,
    "-map",
    "0:v:0",
    "-map",
    "1:a:0",
    "-c:v",
    "copy",
    "-c:a",
    "alac",
    "-sample_fmt",
    "s16p",
    "-dither_method",
    "triangular_hp",
    "-movflags",
    "+faststart",
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  return path_out;
}
