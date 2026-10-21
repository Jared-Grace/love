import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_audio_span_stretch_write(
  path_in,
  path_out,
  seconds_from,
  seconds_to,
  tempo,
) {
  "$plain path_in";
  "$plain path_out";
  "$plain seconds_from";
  "$plain seconds_to";
  "$plain tempo";
  "save a copy of a recording with one span played slower at the same pitch, so a held last word that the recording cuts off can be heard for longer";
  "BUILT 2026-10-21 FOR A SONG THAT ENDS MID-WORD. The generated recording of Psalm 119:33-40 held its last word right up to its final sample and faded it out under the word; lifting the fade back gave the word all the loudness the file had, and the human still asked for it to be cut off later. Nothing exists past the last sample, so the only way to hear the word longer is to play the part where it is still held more slowly.";
  "THE PITCH STAYS AND ONLY THE TIME CHANGES, because atempo stretches without changing pitch. A tempo of 0.5 plays the span at half speed, so it lasts twice as long. Choose a span where the word is held steadily: a span with a consonant in it would drag the consonant out with it.";
  "THE THREE PIECES ARE JOINED WITH A CROSSFADE OF THREE HUNDREDTHS OF A SECOND, so a join does not click; the copy is therefore that much shorter at each join than the plain sum of the pieces.";
  "It writes somewhere new, in twenty-four bit samples, and says yes to overwriting so ffmpeg never waits on the terminal.";
  let filter_text = `[0:a]asplit=3[x][y][z];[x]atrim=0:${seconds_from},asetpts=PTS-STARTPTS[a];[y]atrim=${seconds_from}:${seconds_to},asetpts=PTS-STARTPTS,atempo=${tempo}[b];[z]atrim=start=${seconds_to},asetpts=PTS-STARTPTS[c];[a][b]acrossfade=d=0.03[ab];[ab][c]acrossfade=d=0.03[out]`;
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_in,
    "-filter_complex",
    filter_text,
    "-map",
    "[out]",
    "-c:a",
    "pcm_s24le",
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  let r = {
    path_out,
    filter_text,
  };
  return r;
}
