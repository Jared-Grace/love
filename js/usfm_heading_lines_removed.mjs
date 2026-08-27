import { arguments_assert } from "./arguments_assert.mjs";
import { regex_usfm_heading_line } from "./regex_usfm_heading_line.mjs";
export function usfm_heading_lines_removed(usfm) {
  arguments_assert(arguments, 1);
  ("$plain usfm");
  ("One book of usfm with its headings taken out of it - the mark and the words it carries together - and nothing else changed.");
  ("This is done to the file while its lines are still lines. A heading in usfm is a line, so once the line breaks have been flattened away there is nothing left to say where one ends, and the only thing still standing is the next mark - which is the wrong answer, because a cross reference heading carries marks inside itself.");
  ("Taking the headings out before the verses are cut is also what makes the cutting right. A heading sits between the verse above it and the verse below, so a reader cutting on verse marks alone hands the heading to the verse before it, and that verse comes back with a translator's summary stuck on the end of its last sentence. Every one of them read as scripture, and none of them announced itself.");
  let r = regex_usfm_heading_line();
  let removed = usfm.replace(r, "");
  return removed;
}
