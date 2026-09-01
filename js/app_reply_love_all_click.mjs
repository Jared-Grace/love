import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_reply_love } from "./app_reply_love.mjs";
export async function app_reply_love_all_click(
  languages_chosen_held,
  languages_chosen_reset,
  languages,
  update,
) {
  arguments_assert(arguments, 4);
  let languages_chosen_before = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  property_set(languages_chosen_held, "languages_chosen", []);
  languages_chosen_reset();
  function lambda13(language) {
    let list = property_get(languages_chosen_held, "languages_chosen");
    list_add(list, language);
  }
  await app_reply_love(languages, lambda13);
  await update(3);
  property_set(
    languages_chosen_held,
    "languages_chosen",
    languages_chosen_before,
  );
}
