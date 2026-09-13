import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { lyric_timing_chosen_recalled } from "./lyric_timing_chosen_recalled.mjs";
export function lyric_timing_chosen_remember(chosen) {
  arguments_assert(arguments, 1);
  ("$plain chosen");
  ("Writes down which recording this device is timing, so the next visit opens on it.");
  ("THE KEY IS NAMED AFTER THE ONE THAT READS IT RATHER THAN SPELLED AGAIN HERE, which is how the two cannot come to file and look under two different words. It is what the bible readers' own setting already does.");
  ("★ THE ENDS AND THE MARK ARE KEPT TOO, BECAUSE A CHAPTER ON ITS OWN IS NOT WHAT ANYBODY IS TIMING. A stanza of Psalm 119 and the third arrangement of Psalm 110 are each a sitting somebody comes back to, and remembering only the chapter brought them back to the plain whole psalm every time - which is a different document, with different times, that they then tapped over.");
  ("Only what says which recording is kept, and it is copied out rather than the whole of what the screen is holding. What is written here lands on somebody's device and outlives every change made to this screen, so it says the least that answers the question.");
  let kept = {
    book_code: chosen.book_code,
    chapter_number: chosen.chapter_number,
    verse_first: chosen.verse_first,
    verse_last: chosen.verse_last,
    mark: chosen.mark,
  };
  let key = text_frozen("passage");
  storage_local_set(lyric_timing_chosen_recalled, key, kept);
}
