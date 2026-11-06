import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_en_store_chosen } from "./app_learn_en_store_chosen.mjs";
import { property_get } from "./property_get.mjs";
export async function app_learn_en_gloss_download(chapter_code) {
  "Fetch one chapter of English words explained in whichever language the reader has chosen.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to fetch and nothing that runs.";
  arguments_assert(arguments, 1);
  let store = app_learn_en_store_chosen();
  let download = property_get(store, "download");
  let value = await download(chapter_code);
  return value;
}
