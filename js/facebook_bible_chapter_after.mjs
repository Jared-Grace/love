import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { equal } from "./equal.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
export async function facebook_bible_chapter_after(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("The chapter a facebook read-through posts after chapter_code, or Matthew 1 when chapter_code is null because nothing has been posted yet.");
  ("★ THE ORDER IS THE BIBLE'S OWN LIST STARTED AT MATTHEW: Matthew through Revelation, then Genesis through Malachi, then Matthew again, for ever. Revelation is followed by Genesis and Malachi by Matthew, simply by going round the list.");
  ("★ A CHAPTER NOT ON THE LIST THROWS rather than starting over, because starting over would repost chapters and say nothing.");
  let bible_folder = ebible_folder_english();
  let codes = await ebible_chapter_codes(bible_folder);
  if (equal(chapter_code, null)) {
    let start = "MAT01";
    list_includes_assert(codes, start);
    return start;
  }
  let r = list_next_wrap(codes, chapter_code);
  return r;
}
