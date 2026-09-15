import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
export function bible_usfm_line_descriptive_title_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether one line of usfm opens with the descriptive title mark - the mark a psalm's ascription is written with.");
  ("The mark is asked for through the piece that splits a line into its opening mark and what that mark carries, rather than by reading the letters of the line here, because that piece already knows the two things a reader gets wrong: a line opening with the verse mark says nothing about itself, and a longer mark beginning with the same letter is not the same mark.");
  let split = bible_usfm_marker_rest(usfm_line);
  let described = property_equals(split, "marker", "d");
  return described;
}
