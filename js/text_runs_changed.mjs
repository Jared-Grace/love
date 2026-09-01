import { arguments_assert } from "./arguments_assert.mjs";
import { text_segments_changed } from "./text_segments_changed.mjs";
import { text_segments_joined } from "./text_segments_joined.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function text_runs_changed(before, after) {
  "$plain before";
  "$plain after";
  "Two pieces of text each cut into runs saying which stretches of them are shared and which moved, so a page can draw both lines with the characters they have in common looking identical and only the differences standing out.";
  "IT ANSWERS CHARACTERS AND NOT WORDS, which is what the words answer could never do. Told which words went out and which came in, a reader still has to find them in the line themselves, and a word that only changed its ending is reported as one word leaving and another arriving.";
  "THE SHARED RUNS COME BACK IN BOTH ANSWERS AND ARE THE SAME TEXT IN EACH, so drawing them in one style on both lines is enough to make the two lines line up to the eye. That is what is being asked for: sameness shown by looking the same, rather than by a reader comparing.";
  "AN EMPTY SIDE OF A DIFFERENCE IS LEFT OUT RATHER THAN DRAWN EMPTY. Where a stretch was purely added, the older line has nothing there at all - and a marked run holding no characters is a box of colour standing for nothing, which reads as a change the reader cannot find.";
  arguments_assert(arguments, 2);
  let found = text_segments_changed(before, after);
  let segments = text_segments_joined(found);
  let before_runs = [];
  let after_runs = [];
  function segment_runs(segment) {
    let shared = property_get(segment, "shared");
    let before_text = property_get(segment, "before_text");
    let after_text = property_get(segment, "after_text");
    let changed = not(shared);
    let before_written = text_empty_not_is(before_text);
    if (before_written) {
      let before_run = {
        text: before_text,
        changed,
      };
      list_add(before_runs, before_run);
    }
    let after_written = text_empty_not_is(after_text);
    if (after_written) {
      let after_run = {
        text: after_text,
        changed,
      };
      list_add(after_runs, after_run);
    }
  }
  each(segments, segment_runs);
  let r = {
    before_runs,
    after_runs,
  };
  return r;
}
