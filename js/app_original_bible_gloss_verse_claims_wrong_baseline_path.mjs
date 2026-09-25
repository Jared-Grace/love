import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_original_bible_gloss_verse_claims_wrong_baseline_path() {
  "Where the record of the original-language explanations naming a verse that holds nothing written with the same word is kept.";
  "Each line is the chapter code, the verses the passage covers, the word, and the verse the explanation named - the four things somebody opens the store at to settle one. The sentence that made the finding is not written down, because it is the thing that would be rewritten to mend it.";
  arguments_assert(arguments, 0);
  let v = data_given_baselines_folder();
  let p = path_join([
    v,
    "app_original_bible_gloss_verse_claims_wrong_baseline.json",
  ]);
  return p;
}
