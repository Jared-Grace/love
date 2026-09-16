import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_pointers_verdicts_generic } from "./gloss_chapters_pointers_verdicts_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_verdicts() {
  "How many pointing explanations the Urdu gloss store has, counted by what became of each one - addressed, or refused for a reason said in plain words.";
  "It reads the store and writes nothing back.";
  arguments_assert(arguments, 0);
  let r = await gloss_chapters_pointers_verdicts_generic(
    app_en_learn_bible_gloss_urdu_generate,
    gloss_explain_back_reference_is,
  );
  return r;
}
