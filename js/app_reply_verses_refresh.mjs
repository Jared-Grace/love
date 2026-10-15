import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_clear } from "./list_clear.mjs";
import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { app_reply_verses_prepared_key } from "./app_reply_verses_prepared_key.mjs";
import { app_reply_verses_prepared_take } from "./app_reply_verses_prepared_take.mjs";
import { null_is } from "./null_is.mjs";
import { app_reply_verses_texts_fetch } from "./app_reply_verses_texts_fetch.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_set } from "./property_set.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { app_reply_verses_prepare } from "./app_reply_verses_prepare.mjs";
export async function app_reply_verses_refresh({
  verse_count,
  bible_texts,
  responses,
  responses_buttons,
  encouragement,
  encouragement_singles,
  testament_held,
  languages_chosen_held,
  buttons_refresh,
  visible_count_held,
  copy_refresh,
  prepared_held,
}) {
  "Verses fetched ahead of time are used when they are ready, and the next press's are fetched straight after this one copies - so the copy follows the tap closely enough for the browser to allow it.";
  arguments_assert(arguments, 1);
  each([bible_texts, responses, responses_buttons], list_clear);
  let jewish = property_get(testament_held, "jewish");
  let original = property_get(languages_chosen_held, "languages_chosen");
  let languages_chosen = list_copy(original);
  let key = app_reply_verses_prepared_key(
    verse_count,
    jewish,
    languages_chosen,
  );
  let texts = app_reply_verses_prepared_take(prepared_held, key);
  if (null_is(texts)) {
    texts = await app_reply_verses_texts_fetch(
      verse_count,
      encouragement,
      encouragement_singles,
      jewish,
      languages_chosen,
    );
  }
  list_add_multiple(bible_texts, texts);
  let value = buttons_refresh();
  property_set(visible_count_held, "visible_count", value);
  await catch_null_async(copy_refresh);
  async function prepare() {
    await app_reply_verses_prepare(
      prepared_held,
      verse_count,
      encouragement,
      encouragement_singles,
      jewish,
      languages_chosen,
    );
  }
  await catch_null_async(prepare);
}
