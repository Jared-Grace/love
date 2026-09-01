import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_copy_refresh } from "./app_reply_copy_refresh.mjs";
export async function app_reply_copy_refresh_chosen(
  languages_chosen_held,
  responses,
  bible_texts,
) {
  arguments_assert(arguments, 3);
  let languages_chosen = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  let r = await app_reply_copy_refresh(
    languages_chosen,
    responses,
    bible_texts,
  );
  return r;
}
