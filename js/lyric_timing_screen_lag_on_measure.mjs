import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { html_click_sound_maker } from "./html_click_sound_maker.mjs";
import { html_disabled_set } from "./html_disabled_set.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { sleep } from "./sleep.mjs";
import { less_than } from "./less_than.mjs";
import { html_click_sound_play } from "./html_click_sound_play.mjs";
import { performance_now } from "./performance_now.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_map } from "./list_map.mjs";
import { lyric_timing_lag_measured } from "./lyric_timing_lag_measured.mjs";
import { lyric_timing_lag_said } from "./lyric_timing_lag_said.mjs";
import { lyric_timing_lag_enough } from "./lyric_timing_lag_enough.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function lyric_timing_screen_lag_on_measure({
  run,
  heard_button,
  told,
  count,
  seconds_of,
  window_seconds,
  earlier_input,
}) {
  arguments_assert(arguments, 1);
  if (run.running) {
    return;
  }
  run.running = true;
  if (not(run.maker)) {
    run.maker = html_click_sound_maker();
  }
  run.clicks = [];
  run.taps = [];
  html_disabled_set(heard_button, false);
  html_text_content_set(told, "Listen. The first sound comes in a moment.");
  await sleep(1500);
  let played = 0;
  while (less_than(played, count)) {
    html_click_sound_play(run.maker);
    let v = performance_now();
    run.clicks.push(v);
    played = played + 1;
    let gap = integer_random(1200, 2400);
    await sleep(gap);
  }
  run.running = false;
  html_disabled_set(heard_button, true);
  let clicks = list_map(run.clicks, seconds_of);
  let taps = list_map(run.taps, seconds_of);
  let measured = lyric_timing_lag_measured(clicks, taps, window_seconds);
  let text = lyric_timing_lag_said(measured, count);
  html_text_content_set(told, text);
  if (lyric_timing_lag_enough(measured, count)) {
    let value = number_hundredths_rounded(measured.lag);
    html_value_set(earlier_input, value);
  }
}
