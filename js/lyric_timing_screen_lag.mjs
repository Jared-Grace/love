import { lyric_timing_screen_lag_on_measure } from "./lyric_timing_screen_lag_on_measure.mjs";
import { lyric_timing_screen_lag_on_heard } from "./lyric_timing_screen_lag_on_heard.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { html_disabled_set } from "./html_disabled_set.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_button } from "./html_button.mjs";
import { html_div } from "./html_div.mjs";
export function lyric_timing_screen_lag(parent, earlier_input) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("$plain earlier_input");
  ("The row that measures how late somebody presses, by making sounds at moments it already knows and watching when the presses arrive.");
  ("THE MOMENTS ARE DECIDED HERE RATHER THAN FOUND IN A RECORDING, AND THAT IS THE WHOLE REASON THIS ROW EXISTS. The same number was looked for once by taking the sung lines out of a song and comparing them against what the hand had done, and it could not be had: the words of a song do not begin at moments anything can point at, so every answer was an argument about where a line started rather than about where a hand arrived. A sound this page makes itself begins exactly when this page says it does, and the difference is then the person and nothing else.");
  ("THE SOUNDS ARE SPACED UNEVENLY ON PURPOSE. A regular beat is answered ahead of itself - a person falls into the rhythm and their hand starts moving before the sound does, which is a real and well known thing about people and would report a lag far too small, sometimes below nothing at all. Gaps drawn between one and two seconds leave nothing to fall into, so each press is a reaction rather than a prediction.");
  ("NOTHING IS WRITTEN INTO THE LAG BOX UNLESS THE RUN EARNED IT, and the same question decides that as decides what the person is told. A run half of which went unheard still produces a number, and a number from three presses looks exactly like a number from ten.");
  ("The button that answers is drawn from the start and switched off rather than hidden. A control that appears when a run begins moves everything below it at the exact moment somebody is watching for a sound, and a page that jumps is a page somebody presses in the wrong place.");
  ("The sound maker is opened inside the press and then kept. A browser refuses, silently, to let a page make noise it was not asked for, so it cannot be opened when the row is drawn; and a page is allowed only a handful of them, so opening one per run would eventually leave a person pressing a button that makes nothing.");
  let count = 10;
  let window_seconds = 0.8;
  let heard_text = "Heard it";
  let run = {
    maker: null,
    clicks: [],
    taps: [],
    running: false,
  };
  function seconds_of(ms) {
    let seconds = divide(ms, 1000);
    return seconds;
  }
  function on_heard() {
    let r = lyric_timing_screen_lag_on_heard(run);
    return r;
  }
  async function on_measure() {
    let r2 = await lyric_timing_screen_lag_on_measure({
      run,
      heard_button,
      told,
      count,
      seconds_of,
      window_seconds,
      earlier_input,
    });
    return r2;
  }
  html_button(parent, "Measure my tap lag", on_measure);
  let heard_button = html_button(parent, heard_text, on_heard);
  html_disabled_set(heard_button, true);
  let told = html_div(parent);
  html_text_content_set(
    told,
    "Ten sounds, about twenty seconds. Press " +
      heard_text +
      " the instant you hear each one.",
  );
}
