import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_repeated } from "./list_repeated.mjs";
export async function ebible_chapter_verse_marks_repeated(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Every verse number one chapter's page marks more than once.");
  ("An address is only an address while it is the one thing wearing it. Two marks carrying the same one make a link to that verse land on whichever of them the browser reaches first, and they leave the other verse with no address at all - so one wrong mark costs two verses, and neither of them looks wrong on the page.");
  ("The finder beside this one notices a repeat only when it happens to leave a gap as well, which is luck rather than a check: engerv's Job 24 was found that way and would have hidden a repeat that had displaced nothing. This asks the question directly, so it holds wherever the numbering is otherwise sound.");
  ("Read off the address rather than off the printed number, because the two disagreeing is the whole fault. Job 24's second mark prints 3b and carries the fourth verse's address, and a reader comparing what is printed sees two different marks.");
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = property_get(opened, "verse_numbers");
  function lambda(verse_number) {
    let number = property_get(verse_number, "number");
    return number;
  }
  let numbers = list_map(verse_numbers, lambda);
  let repeated = list_repeated(numbers);
  return repeated;
}
