import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_label_placeholder_wide } from "./html_input_label_placeholder_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { lyric_timing_screen_choose } from "./lyric_timing_screen_choose.mjs";
export function lyric_timing_screen_passage(parent, on_settled) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("$plain on_settled");
  ("The three things saying which passage is being timed and how late the person taps: the translation, the passage itself, and the lag to take off afterwards.");
  ("THE PASSAGE IS CHOSEN OUT OF THE BIBLE RATHER THAN TYPED. It used to be two boxes wanting a three letter book code and a number, and that was the one thing on this screen a person could simply get wrong: a wrong code is not refused anywhere, it writes the times of the psalm just sung into the document of a book nobody opened. The canon the bible apps already offer answers the same question with nothing to remember.");
  ("THEY ARRIVE FILLED IN. A screen offered blank asks somebody to choose before they can do anything at all, and the answer is nearly always the psalm most recently worked on, so what is filled in is right more often than it is wrong and is one press to change when it is wrong.");
  ("EVERY BOX SAYS WHAT IT IS FOR IN WORDS THAT STAY. Both of these arrive already filled in, and a box that leans on its greyed placeholder to explain itself is explaining itself only while it is empty - which here is never. A person meeting this screen for the first time saw two numbers and no way of telling which was which.");
  ("The lag sits with the passage rather than beside the tapping, because it is a fact about the person and not about the song. It is measured once, by watching the video and seeing the words land late, and then it is the same on every song that person ever times.");
  ("What to do once a passage has been settled on is handed in rather than decided here. This row's business is which passage, and loading it is the screen's - a row that fetched the passage itself could only be put on a screen that wanted it fetched that way.");
  let version_input = html_input_label_placeholder_wide(
    parent,
    "Translation",
    "bsb",
  );
  html_value_set(version_input, "bsb");
  let chosen = {
    book_code: "PSA",
    chapter_number: 149,
  };
  lyric_timing_screen_choose(parent, version_input, chosen, on_settled);
  let earlier_input = html_input_label_placeholder_wide(
    parent,
    "Tap lag in seconds - how late you press, taken off every time",
    "0.3",
  );
  html_value_set(earlier_input, "0.3");
  let inputs = {
    version_input,
    chosen,
    earlier_input,
  };
  return inputs;
}
