import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_title_passage(title) {
  "The chapter and the first and last verse a sung Psalm names itself after, or nothing when the name of the video does not name a passage at all.";
  "Every number after the chapter is read and only the first and the last of them are kept, so a name that marks half a verse with a letter, or that carries a stray mark between the verse and the one it runs to, still says the same thing it says to a person reading it. The alternative was a shape for each way a name has been written, and each new way of writing one would then be read as no passage at all rather than as the passage it plainly is.";
  arguments_assert(arguments, 1);
  let found = title.match(/^Psalms? (\d+):(.+)$/);
  if (not(found)) {
    return null;
  }
  let chapter = Number(found[1]);
  let rest = found[2];
  let numbers = rest.match(/\d+/g);
  if (not(numbers)) {
    return null;
  }
  let verse_first = Number(numbers[0]);
  let verse_last = Number(numbers[subtract(numbers.length, 1)]);
  let passage = {
    chapter: chapter,
    verse_first: verse_first,
    verse_last: verse_last,
  };
  return passage;
}
