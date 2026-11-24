import { fn_name } from "./fn_name.mjs";
import { floor } from "./floor.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function video_speech_span_or_null(levels) {
  "$plain levels";
  ("Where the speaking starts and ends in a recording, given its loudness per 50 ms window (",
    fn_name("audio_window_levels"),
    "), with a little kept either side, as {start_ms, end_ms}; null when there is no voice to find. The laptop twin of ",
    fn_name("video_speech_span_or_null"),
    " in android/shared_camera/.../VideoSpeechTrim.kt - the same rule and the same numbers, so a chapter joined here is cut where the phone's Download cuts it. Every reason for every number is written beside it there; change both or neither.");
  arguments_assert(arguments, 1);
  let window_ms = 50;
  let share_of_loudest = 0.05;
  let pad_ms = 300;
  let run_windows = 4;
  let over_room = 2;
  let loudest_floor = 0.01;
  if (equal(levels.length, 0)) {
    return null;
  }
  let loudest = Math.max(...levels);
  if (less_than(loudest, loudest_floor)) {
    return null;
  }
  function lambda(v) {
    let g = greater_than(v, 0);
    return g;
  }
  function lambda2(a, b) {
    let difference = subtract(a, b);
    return difference;
  }
  let heard = levels.filter(lambda).sort(lambda2);
  let p = divide(heard.length, 5);
  let room = equal(heard.length, 0) ? 0 : heard[floor(p)];
  let a2 = multiply(loudest, share_of_loudest);
  let b2 = multiply(room, over_room);
  let line = math_max(a2, b2);
  function lambda3(v) {
    let ge = greater_than_equal(v, line);
    return ge;
  }
  let loud = levels.map(lambda3);
  function run_at(start) {
    if (less_than(start, 0) || greater_than(start + run_windows, loud.length)) {
      return false;
    }
    for (let i = start; less_than(i, start + run_windows); i++) {
      if (not(loud[i])) {
        return false;
      }
    }
    return true;
  }
  let first = -1;
  for (let i = 0; less_than(i, loud.length); i++) {
    if (run_at(i)) {
      first = i;
      break;
    }
  }
  if (equal(first, -1)) {
    function lambda4(v) {
      let ge2 = greater_than_equal(v, line);
      return ge2;
    }
    first = levels.findIndex(lambda4);
  }
  let last = -1;
  for (let i = subtract(loud.length, 1); greater_than_equal(i, 0); i--) {
    if (run_at(subtract(i, run_windows) + 1)) {
      last = i;
      break;
    }
  }
  if (equal(last, -1)) {
    function lambda5(v) {
      let ge3 = greater_than_equal(v, line);
      return ge3;
    }
    last = levels.findLastIndex(lambda5);
  }
  let total_ms = multiply(levels.length, window_ms);
  let left = multiply(first, window_ms);
  let b3 = subtract(left, pad_ms);
  let start_ms = math_max(0, b3);
  let end_ms = math_min(total_ms, multiply(last + 1, window_ms) + pad_ms);
  let r = {
    start_ms,
    end_ms,
  };
  return r;
}
