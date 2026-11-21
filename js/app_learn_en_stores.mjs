import { app_learn_en_store_urdu } from "./app_learn_en_store_urdu.mjs";
import { app_learn_en_store_tagalog } from "./app_learn_en_store_tagalog.mjs";
import { app_learn_en_store_spanish } from "./app_learn_en_store_spanish.mjs";
export function app_learn_en_stores() {
  "Every store of English words explained in a reader's own language, each beside the language it explains in - how to fetch one of its chapters, and how to ask which chapters it has published.";
  "The app offers exactly these languages and nothing else, because a language here is only readable once somebody has explained the English in it word by word. So a new language is one more entry here, and the offering, the fetching and the chapter list all follow from it rather than each having to be told.";
  "The first entry is the one the app opens in when the reader has chosen none of them.";
  let urdu = app_learn_en_store_urdu();
  let tagalog = app_learn_en_store_tagalog();
  let spanish = app_learn_en_store_spanish();
  let r = [urdu, tagalog, spanish];
  return r;
}
