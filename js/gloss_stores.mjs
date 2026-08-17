import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
export function gloss_stores() {
  "Every function whose stored chapters hold authored word glosses.";
  "A store is named by the function that writes it, because that is what the folder on disk is named after and what every reader of the store is already handed. Nothing here is a path or a word, so a store cannot be named that does not exist.";
  "Written down in one place so a sweep over all the glosses says which stores it covered by asking rather than by carrying its own copy of the list. A third store added later joins every such sweep by being added here.";
  "The third store arrived and was not added here, so every sweep asking this list looked at two stores while three were on the disk - and each sweep said which stores it covered, which read as an answer about all of them. A store missing from the roster is not reported missing anywhere: it is simply never asked about.";
  let stores = [
    app_ceb_bible_gloss_generate,
    app_original_bible_gloss_generate,
    app_en_learn_bible_gloss_urdu_generate,
  ];
  return stores;
}
