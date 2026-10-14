import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
export function text_without_start(text, start) {
  arguments_assert(arguments, 2);
  ("$plain text");
  ("$plain start");
  ("The text with a known opening taken off, or the text unchanged where it does not open that way.");
  ("★ IT HANDS BACK THE WHOLE TEXT RATHER THAN REFUSING WHEN THE OPENING IS NOT THERE, for the same reason its sister that takes off an ending does: the caller who has already tested for the opening and the caller who is taking off whatever may be there both want the same answer. Refusing would make the ordinary case two calls; cutting the length off the front without looking would quietly shorten a name that never carried the opening at all, and a crop named titiaan_heerlijkheid.png would come back as aan_heerlijkheid.png.");
  ("It is the mirror of taking an ending off and was written the day a file name had to be read without the three characters that say where the picture came from. Only the ending half existed, which left a caller either slicing by a counted length - the exact mistake the paragraph above describes - or testing and slicing in two steps at every site.");
  let starts = text_starts_with(text, start);
  if (not(starts)) {
    return text;
  }
  let shorter = text.slice(start.length);
  return shorter;
}
