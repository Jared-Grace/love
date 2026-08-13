import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
export function gloss_stores() {
  "Every function whose stored chapters hold authored word glosses.";
  "A store is named by the function that writes it, because that is what the folder on disk is named after and what every reader of the store is already handed. Nothing here is a path or a word, so a store cannot be named that does not exist.";
  "Written down in one place so a sweep over all the glosses says which stores it covered by asking rather than by carrying its own copy of the list. A third store added later joins every such sweep by being added here.";
  let stores = [app_ceb_bible_gloss_generate, app_original_bible_gloss_generate];
  return stores;
}
