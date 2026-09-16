import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verses_repeated } from "./bible_glyph_chapters_verses_repeated.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_verses_repeated_walked() {
  arguments_assert(arguments, 0);
  ("Every verse of the picture Bible that repeats an earlier verse of its own chapter, written as one word a record can hold, beside how many verses were read.");
  ("A RECORD HOLDS NAMES AND NOT SENTENCES. The repeated text is the useful thing to read and the useless thing to file: it is long, it changes the moment anybody rewrites either verse, and a record of it would then go stale without the fault having been repaired. So the name is the chapter and the two verse numbers, which is enough to find it again and nothing more.");
  ("The count of what was reached is carried beside the names rather than inside them, so a walk that opened no chapter can be told from a Bible with nothing wrong in it.");
  let reading = bible_glyph_chapters_verses_repeated();
  let walked = property_get(reading, "verses_read");
  let found = property_get(reading, "offenders");
  let offenders = [];
  for (let one of found) {
    let value = property_get(one, "chapter_code");
    let value2 = property_get(one, "first");
    let v = String(value2);
    let value3 = property_get(one, "again");
    let v2 = String(value3);
    let name = text_combine_multiple([value, " ", v, " ", v2]);
    list_add(offenders, name);
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
