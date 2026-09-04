import { lyric_video_words_screens_cases } from "./lyric_video_words_screens_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_words_screens } from "./lyric_video_words_screens.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_words_screens_cases_gate_run() {
  "QA gate: each recorded piece written down in the corpus is cut into exactly the screens that corpus says.";
  "★ NOTHING ELSE IN THE REPOSITORY CAN TELL A GOOD CUT FROM A BAD ONE, WHICH IS WHY THIS EXISTS. A cut that broke a phrase in half, or opened a gap between two screens, or lost a word, produces a video that renders without complaint and reads wrongly - and the only reader is a person watching a chapter go by. Here the answer is written down beside the question, so the fault has to declare itself.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = lyric_video_words_screens_cases();
  function answer(c) {
    let words = property_get(c, "words");
    let room = property_get(c, "room");
    let seconds = property_get(c, "seconds");
    let screens = lyric_video_words_screens(words, room, seconds);
    return screens;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "screens",
    "why",
    "a recorded piece cut into screens",
  );
  return r;
}
