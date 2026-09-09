import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_ceb_bible_gloss_words_explained_apart_baseline_path() {
  "Where the record of the Cebuano words the app explains more than one way is kept.";
  "Each line is one word, and the two claims made about it are not written beside it. Which two roots were named moves as chapters are glossed again, so a record carrying them would go red whenever an explanation was improved; the word is what a person opens the passages under, and it is the part that holds still.";
  "★ THE SPELLING WRITTEN DOWN IS ONE OF TWO, AND WHICH ONE IS ARBITRARY. Cebuano writes one sound two ways, so panulundon and panulondon are one word, and the reading beneath this keeps whichever spelling it met first as the name of the pair. Gloss an earlier chapter that writes the other spelling and the name flips - which shows up as one word going away and its twin arriving in the same run, and is the one shape of failure here that is not a new fault.";
  let v = data_given_baselines_folder();
  let p = path_join([
    v,
    "app_ceb_bible_gloss_words_explained_apart_baseline.json",
  ]);
  return p;
}
