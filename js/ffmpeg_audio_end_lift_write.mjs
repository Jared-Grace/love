import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_audio_end_lift_write(
  path_in,
  path_out,
  seconds_start,
  decibels_lift,
  seconds_decay,
  decibels_per_second,
  decibels_cap,
) {
  "$plain path_in";
  "$plain path_out";
  "raise the end of a recording so a last word that fades or sits low holds at the level of the rest of the song, and save that as a new recording";
  "TWO PARTS, BECAUSE A LOW LAST WORD HAS TWO FAULTS. From seconds_start the word is lifted by a fixed decibels_lift, reached over a tenth of a second so the step is not heard. From seconds_decay a second lift grows by decibels_per_second, which is chosen to match the word's own fall so the word holds steady instead of fading, and stops growing at decibels_cap so the very end still dies away naturally.";
  "Measure the ending per tenth of a second first and pick the numbers from it; a lift guessed without measuring makes a held word louder then softer instead of steady.";
  "It writes somewhere new, in twenty-four bit samples, and says yes to overwriting so ffmpeg never waits on the terminal.";
  let expression_text = `${decibels_lift}*min(1,max(0,(t-${seconds_start})/0.1))+min(${decibels_cap},${decibels_per_second}*max(0,t-${seconds_decay}))`;
  let filter_text = `asetnsamples=64,volume='pow(10,(${expression_text})/20)':eval=frame`;
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_in,
    "-af",
    filter_text,
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
