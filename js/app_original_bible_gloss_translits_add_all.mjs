import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_chapter_codes } from "./local_function_chapter_codes.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_chapter_translits_add } from "./app_original_bible_gloss_chapter_translits_add.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function app_original_bible_gloss_translits_add_all() {
  "Give every explanation in every written original-language gloss chapter the pronunciation of the word it is about, and answer with how many words each chapter gained.";
  "★ IT FINDS ITS OWN SET, asking the store which chapters are there rather than being handed a list, so a chapter written after this was last run is swept the next time without anyone remembering to add it.";
  "A chapter that already carries every pronunciation is left alone and reports nothing gained, so running this twice costs the second run nothing and changes no file.";
  "The chapters are taken one after another rather than all at once, because each one reads and writes the same store and the interlinear behind them is large enough that asking for many at the same time buys nothing.";
  arguments_assert(arguments, 0);
  let codes = await local_function_chapter_codes(
    app_original_bible_gloss_generate,
  );
  let chapters = [];
  let added = 0;
  for (let code of codes) {
    let done = await app_original_bible_gloss_chapter_translits_add(code);
    let gained = property_get(done, "added");
    added = add(added, gained);
    list_add(chapters, done);
  }
  function chapter_gained(done) {
    let gained = property_get(done, "added");
    return gained;
  }
  let touched = chapters.filter(chapter_gained);
  let r = {
    chapters: list_size(codes),
    changed: list_size(touched),
    added,
  };
  return r;
}
