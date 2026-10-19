import { app_en_learn_bible_stores } from "./app_en_learn_bible_stores.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_en_learn_bible_languages_offered() {
  "The languages this app can explain an English word in, and so the only ones it offers a reader.";
  "Read off the stores of explanations, so a language is offered exactly when a store for it exists and the two cannot get ahead of each other.";
  "Every other bible reader here offers all of them, because reading a verse needs only that the verse exists. This one has to have been written for you, word by word, so what it can offer is what has been written.";
  let stores = app_en_learn_bible_stores();
  let r = list_map_property(stores, "language");
  return r;
}
