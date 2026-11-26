import { divide_round } from "./divide_round.mjs";
import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
export async function audio_window_levels(path_audio, window_ms) {
  "$plain path_audio";
  "$plain window_ms";
  ("Each window's loudness in a sound or video file, in order, as a root mean square from 0 to 1 - the laptop twin of ",
    fn_name("audio_window_levels"),
    " in android/shared_camera/.../VideoSpeechTrim.kt, so a recording measured here reads the same as on the phone that made it.");
  ("The windows are counted in samples after resampling to one fixed rate, so a window is always the same length whatever rate the file was made at; resampling does not change how loud it is. A silent window reads minus infinity decibels, which is answered as 0. The last window may be shorter than the rest where the phone drops it: at most one window's length at the very end.");
  arguments_assert(arguments, 2);
  let rate = 48000;
  let right = Number.parseFloat(window_ms);
  let top = multiply(rate, right);
  let samples = divide_round(top, 1000);
  let key = "lavfi.astats.Overall.RMS_level";
  let v = String(rate);
  let v2 = String(samples);
  let filter_text = text_combine_multiple([
    "aresample=",
    v,
    ",asetnsamples=n=",
    v2,
    ":p=0,astats=metadata=1:reset=1,ametadata=print:key=",
    key,
    ":file=-",
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_audio,
    "-vn",
    "-af",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_metadata_numbers(printed_text, key);
  function level(item) {
    let db = item.reading;
    if (Number.isNaN(db)) {
      let r2 = 0;
      return r2;
    }
    let divided = divide(db, 20);
    let r = Math.pow(10, divided);
    return r;
  }
  let levels = readings.map(level);
  return levels;
}
