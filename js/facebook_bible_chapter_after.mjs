import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function facebook_bible_chapter_after(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("The chapter a facebook read-through posts after chapter_code, or Matthew 1 when chapter_code is null because nothing has been posted yet.");
  ("★ THE ORDER IS THE BIBLE'S OWN LIST STARTED AT MATTHEW: Matthew through Revelation, then Genesis through Malachi, then Matthew again, for ever. Revelation is followed by Genesis and Malachi by Matthew, simply by going round the list.");
  ("★ A CHAPTER NOT ON THE LIST THROWS rather than starting over, because starting over would repost chapters and say nothing.");
  let bible_folder = ebible_folder_english();
  let codes = await ebible_chapter_codes(bible_folder);
  let last = chapter_code;
  if (equal(last, null)) {
    let start = codes.indexOf("MAT01");
    if (less_than(start, 0)) {
      throw new Error("MAT01 is not on the list of chapters");
    }
    let r2 = codes[start];
    return r2;
  }
  let index = codes.indexOf(last);
  if (less_than(index, 0)) {
    throw new Error(last + " is not on the list of chapters");
  }
  let r = codes[modulo(index + 1, codes.length)];
  return r;
}
