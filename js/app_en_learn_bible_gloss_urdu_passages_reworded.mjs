import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { gloss_passages_reworded_generic } from "./gloss_passages_reworded_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_passages_reworded() {
  "Every passage the Urdu gloss store explains whose English wording the Berean Standard Bible no longer gives for those verses.";
  "★ THE STORE WAS AUTHORED AGAINST ONE PRINTING AND THE APP NOW SHOWS ANOTHER. The Berean is read from its publisher rather than from the archive's copy, and the archive was a printing behind. Whatever was explained before that switch was explained from the older wording, and nothing anywhere reports which passages that is - so this is the reading that says so.";
  "Nothing is written. This is a count and a list, and what to do with it is a judgment about re-authoring.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let bible_folder = ebible_folder_english();
  let r = await gloss_passages_reworded_generic(fn, bible_folder);
  return r;
}
