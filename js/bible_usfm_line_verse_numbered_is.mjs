import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function bible_usfm_line_verse_numbered_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether one line of usfm carries a verse mark inside what its opening mark holds - that is, whether the printing counts the words on this line as a numbered verse.");
  ("It is asked of what the opening mark carries rather than of the whole line, so that the opening mark itself can never be mistaken for a verse mark. A line opening with the verse mark is handed back whole by the splitter, and so is still answered yes here, which is what a caller asking whether these words are numbered means.");
  let split = bible_usfm_marker_rest(usfm_line);
  let rest = property_get(split, "rest");
  let numbered = text_includes(rest, "\\v ");
  return numbered;
}
