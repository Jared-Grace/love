import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_copy_refresh } from "./app_reply_copy_refresh.mjs";
export async function app_reply_copy_refresh_chosen(
  languages_chosen_held,
  responses,
  bible_texts,
  languages_show_held,
  testament_held,
) {
  arguments_assert(arguments, 5);
  let languages_chosen = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  let label_refresh = property_get(languages_show_held, "label_refresh");
  label_refresh();
  let languages_show = property_get(languages_show_held, "languages_show");
  let jewish = property_get(testament_held, "jewish");
  let r = await app_reply_copy_refresh(
    languages_chosen,
    responses,
    bible_texts,
    languages_show,
    jewish,
  );
  return r;
}
