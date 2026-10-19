import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_store_chosen } from "./app_en_learn_bible_store_chosen.mjs";
import { property_get } from "./property_get.mjs";
export async function app_en_learn_bible_gloss_chapters_uploaded() {
  "Every chapter that has been explained in the language the reader has chosen, so the book and chapter lists offer exactly what can be shown to them.";
  "A chapter explained in Urdu is not a chapter a reader of Tagalog can be shown, so the list follows the language rather than being one list for the whole app.";
  arguments_assert(arguments, 0);
  let store = app_en_learn_bible_store_chosen();
  let chapters_uploaded = property_get(store, "chapters_uploaded");
  let value = await chapters_uploaded();
  return value;
}
