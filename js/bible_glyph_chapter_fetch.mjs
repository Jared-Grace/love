import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_fetch_found } from "./bible_glyph_chapter_fetch_found.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapter_fetch(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to send for and nothing that runs.");
  ("One stored picture Bible chapter, sent for on its own, with the other twenty four left where they are.");
  let r = await bible_glyph_chapter_fetch_found(chapter_code);
  let found = property_get(r, "found");
  let stored = property_get(r, "stored");
  let f_name = fn_name("bible_glyph_chapter_references");
  assert_json(found, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter answers to that code here - either it has not been written, or it has been written and nobody added it to this list of addresses. Ask ",
      f_name,
      " for the chapters that exist, and if the code is in there then the address is what is missing",
    ]),
  });
  return stored;
}
