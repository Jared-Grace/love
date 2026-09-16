import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_chapter_codes } from "./local_function_chapter_codes.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_chapter_section_marks_strip } from "./app_original_bible_gloss_chapter_section_marks_strip.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function app_original_bible_gloss_section_marks_strip_all() {
  "Take the welded Hebrew paragraph mark off every word that carries one, across every written original-language gloss chapter, and answer with every spelling it mended.";
  "★ IT FINDS ITS OWN SET, asking the store which chapters are there rather than being handed a list, so a chapter written after this was last run is swept the next time without anyone remembering to add it.";
  "★ IT HANDS BACK THE MENDS THEMSELVES, not a count of them, because this changes how a word of the Bible is spelt on the page and a number cannot be checked by eye. Every before and after is there to be read.";
  "A chapter with no welded word is left alone and mends nothing, so running this twice costs the second run nothing and changes no file.";
  arguments_assert(arguments, 0);
  let codes = await local_function_chapter_codes(
    app_original_bible_gloss_generate,
  );
  let changes = [];
  for (let code of codes) {
    let done = await app_original_bible_gloss_chapter_section_marks_strip(code);
    let mended = property_get(done, "changes");
    list_add_multiple(changes, mended);
  }
  let r = {
    chapters: list_size(codes),
    mended: list_size(changes),
    changes,
  };
  return r;
}
