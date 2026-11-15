import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_chapter_codes } from "./local_function_chapter_codes.mjs";
import { app_learn_original_gloss_generate } from "./app_learn_original_gloss_generate.mjs";
import { strongs_dictionary_both } from "./strongs_dictionary_both.mjs";
import { app_learn_original_gloss_chapter_strongs_add } from "./app_learn_original_gloss_chapter_strongs_add.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
export async function app_learn_original_gloss_strongs_add_all() {
  arguments_assert(arguments, 0);
  ("Give every explanation in every written original-language gloss chapter the Strong's number and root word of the word it is about, and answer with how many words each chapter gained.");
  ("★ IT FINDS ITS OWN SET, asking the store which chapters are there, so a chapter written after this was last run is swept next time without anyone remembering to add it. Running it twice changes nothing the second time.");
  ("The dictionary is read once for the whole sweep and handed to each chapter.");
  let codes = await local_function_chapter_codes(
    app_learn_original_gloss_generate,
  );
  let dictionary = await strongs_dictionary_both();
  let changed = 0;
  let added = 0;
  for (let code of codes) {
    let done = await app_learn_original_gloss_chapter_strongs_add(
      code,
      dictionary,
    );
    let gained = property_get(done, "added");
    added = add(added, gained);
    if (gained) {
      changed = add(changed, 1);
    }
  }
  let r = {
    chapters: list_size(codes),
    changed,
    added,
  };
  return r;
}
