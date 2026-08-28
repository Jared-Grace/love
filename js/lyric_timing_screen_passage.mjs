import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { lyric_timing_screen_choose } from "./lyric_timing_screen_choose.mjs";
export function lyric_timing_screen_passage(parent) {
  arguments_assert(arguments, 1);
  ("$plain parent");
  ("The three things saying which passage is being timed and how late the person taps: the translation, the passage itself, and the lag to take off afterwards.");
  ("THE PASSAGE IS CHOSEN OUT OF THE BIBLE RATHER THAN TYPED. It used to be two boxes wanting a three letter book code and a number, and that was the one thing on this screen a person could simply get wrong: a wrong code is not refused anywhere, it writes the times of the psalm just sung into the document of a book nobody opened. The canon the bible apps already offer answers the same question with nothing to remember.");
  ("THEY ARRIVE FILLED IN. A screen offered blank asks somebody to choose before they can do anything at all, and the answer is nearly always the psalm most recently worked on, so what is filled in is right more often than it is wrong and is one press to change when it is wrong.");
  ("The lag sits with the passage rather than beside the tapping, because it is a fact about the person and not about the song. It is measured once, by watching the video and seeing the words land late, and then it is the same on every song that person ever times.");
  let version_input = html_input_placeholder_wide(parent, "translation");
  html_value_set(version_input, "bsb");
  let chosen = {
    book_code: "PSA",
    chapter_number: 149,
  };
  lyric_timing_screen_choose(parent, version_input, chosen);
  let earlier_input = html_input_placeholder_wide(parent, "tap lag in seconds");
  html_value_set(earlier_input, "0.3");
  let inputs = {
    version_input,
    chosen,
    earlier_input,
  };
  return inputs;
}
