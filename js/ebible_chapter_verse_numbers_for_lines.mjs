import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_numbers_to_pair } from "./ebible_chapter_verse_numbers_to_pair.mjs";
import { ebible_chapter_verse_numbers_marked } from "./ebible_chapter_verse_numbers_marked.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function ebible_chapter_verse_numbers_for_lines(
  bible_folder,
  chapter_code,
  lines,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain lines";
  arguments_assert(arguments, 3);
  ("The numbers to set against one chapter's read-aloud lines, or nothing when neither reading of its page's marks has as many numbers as there are lines.");
  ("A read-aloud line is a verse and what reading aloud lacks is only the number, which the page has. So the whole of pairing them is choosing which of the page's numbers to use, and there are two readings of that: the marks that have words, and all the marks. Asked here, in one place, because the reading that lays the lines against the numbers and the reading that counts how many chapters disagree have to answer it the same way - otherwise the record calls a chapter broken while the app reads it, or the other way about.");
  ("The words-only reading is asked first and kept whenever it agrees, so nothing that already pairs is touched. It is the more trustworthy of the two: a mark standing over a cleared-away footnote is read aloud by nobody, and counting it would give every verse after it somebody else's words.");
  ("All the marks are asked for only once the first reading has failed, and only kept if that count agrees exactly. A page can carry every mark and have words for none of the last of them - the words are then missing from the page rather than from the translation, and the reading-aloud edition still has them. Refusing the chapter there loses verses this repo already holds, over a fault in the half it is not reading from.");
  ("Nothing is answered when neither count agrees, which is what used to happen whenever the first one did not. There is no honest way to lay the two against each other then, and laying them from the front regardless gives every verse after the disagreement somebody else's words with nothing anywhere saying so - it reads as scripture.");
  let words = await ebible_chapter_verse_numbers_to_pair(
    bible_folder,
    chapter_code,
  );
  let left = list_size(words);
  let words_agree = equal(left, lines);
  if (words_agree) {
    return words;
  }
  let marked = await ebible_chapter_verse_numbers_marked(
    bible_folder,
    chapter_code,
  );
  let left2 = list_size(marked);
  let marked_agree = equal(left2, lines);
  if (marked_agree) {
    return marked;
  }
  return null;
}
