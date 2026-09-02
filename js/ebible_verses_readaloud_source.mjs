import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_readaloud_lines } from "./ebible_chapter_readaloud_lines.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { ebible_chapter_verse_numbers_for_lines } from "./ebible_chapter_verse_numbers_for_lines.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
export async function ebible_verses_readaloud_source(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("One chapter of a bible as its publisher wrote it out for reading aloud, cut into verses and numbered, with nothing put right in it.");
  ("Both halves of what comes back are the publisher's own. The words are the lines of the read-aloud edition, and the numbers are the marks the page carries, chosen by the one reading that both this road and the record of unpairable chapters ask.");
  ("It stands apart from the repaired reading because a reading that looks for what is wrong with a file cannot be handed that file with the wrong things already put right in it. The detector that finds the Urdu bible's welded words was asked through the repair, and of the words it offered, not one was a word it had itself been taught to mend: they were gone from what it was shown. So the gate still catches damage nobody has ruled on, and nothing anywhere can any longer say how much of the known damage is still in front of a reader. A remedy that hides the fault from the instrument leaves the fault unmeasurable.");
  ("Nothing at all is answered for a chapter this bible does not read aloud, and for one whose lines cannot be laid against its page's marks. Both are real states rather than faults, and the repaired reading next door says at length why each of them is answered that way.");
  let filtered = await ebible_chapter_readaloud_lines(
    bible_folder,
    chapter_code,
  );
  let unread = null_is(filtered);
  if (unread) {
    return null;
  }
  let lines = list_size(filtered);
  let verse_numbers = await ebible_chapter_verse_numbers_for_lines(
    bible_folder,
    chapter_code,
    lines,
  );
  let unpaired = null_is(verse_numbers);
  if (unpaired) {
    return null;
  }
  let list = list_map_pairs(filtered, verse_numbers, ebible_verse_new_text);
  return list;
}
