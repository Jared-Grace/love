import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_usfm_marker_layout } from "./bible_usfm_marker_layout.mjs";
import { equal } from "./equal.mjs";
export function bible_usfm_line_lone_marker_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether a line of usfm is a layout mark standing on its own with no words after it, and a mark whose whole meaning is what it asks of the line beneath.");
  ("Two printings write the same poem two ways. One puts the step and the verse on one line, so the step is read off the line it steps. The other puts the step on a line of its own and the verse on the next, and then the step has nothing to step and is thrown away as an empty line, which is how a psalm arrives flat with its verse numbers still in it.");
  ("A break is not one of these even though it carries no words, because a break is not asking anything of the line beneath it - it is a blank line in its own right, and joining it to what follows would close the gap the printing asked for.");
  ("Nor is a mark whose line is thrown away, because there the emptiness is beside the point: the words would go whether there were any or not, and carrying the mark down onto a verse would hand that verse the thrown-away mark's own fate.");
  let split = bible_usfm_marker_rest(usfm_line);
  let marker = property_get(split, "marker");
  let unmarked = text_empty_is(marker);
  if (unmarked) {
    return false;
  }
  let rest = property_get(split, "rest");
  let carries = text_empty_not_is(rest);
  if (carries) {
    return false;
  }
  let layout = bible_usfm_marker_layout(marker);
  let kind = property_get(layout, "kind");
  let broken = equal(kind, "break");
  if (broken) {
    return false;
  }
  let dropped = equal(kind, "drop");
  if (dropped) {
    return false;
  }
  return true;
}
