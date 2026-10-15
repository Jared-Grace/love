import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_verses_prepared_key } from "./app_reply_verses_prepared_key.mjs";
import { app_reply_verses_texts_fetch } from "./app_reply_verses_texts_fetch.mjs";
import { property_set } from "./property_set.mjs";
export async function app_reply_verses_prepare(
  prepared_held,
  verse_count,
  encouragement,
  encouragement_singles,
  jewish,
  languages_chosen,
) {
  "Fetches the next press's verses before the press, so that press can copy at once.";
  "A browser only lets a page copy for a few seconds after a tap. Fetching three verses in two languages on a phone took longer than that, so the copy was refused every time and the button looked dead.";
  arguments_assert(arguments, 6);
  let key = app_reply_verses_prepared_key(
    verse_count,
    jewish,
    languages_chosen,
  );
  let texts = await app_reply_verses_texts_fetch(
    verse_count,
    encouragement,
    encouragement_singles,
    jewish,
    languages_chosen,
  );
  property_set(prepared_held, key, texts);
}
