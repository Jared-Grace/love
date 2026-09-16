import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_pointers_spreads_generic } from "./gloss_chapters_pointers_spreads_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_spreads() {
  "Across the Urdu gloss store, how often an address that catches several explanations is failing in each of the ways it can fail.";
  "It reads the store and writes nothing back.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_pointers_spreads_generic(
    app_en_learn_bible_gloss_urdu_generate,
    gloss_explain_back_reference_is,
  );
  return r;
}
