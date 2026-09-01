import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_clear } from "./list_clear.mjs";
import { equal } from "./equal.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_verses_add } from "./app_reply_verses_add.mjs";
import { each_async } from "./each_async.mjs";
import { property_set } from "./property_set.mjs";
export async function app_reply_verses_refresh({
  verse_count,
  bible_texts,
  responses,
  responses_buttons,
  encouragement,
  encouragement_singles,
  languages_chosen_held,
  buttons_refresh,
  visible_count_held,
  copy_refresh,
}) {
  arguments_assert(arguments, 1);
  each([bible_texts, responses, responses_buttons], list_clear);
  let e = encouragement;
  if (equal(verse_count, 1)) {
    e = encouragement_singles;
  }
  let taken = list_shuffle_take(e, verse_count);
  let reference_current = null;
  async function reference_each(reference) {
    let languages_chosen = property_get(
      languages_chosen_held,
      "languages_chosen",
    );
    reference_current = await app_reply_verses_add(
      reference,
      reference_current,
      bible_texts,
      languages_chosen,
    );
  }
  await each_async(taken, reference_each);
  let value = buttons_refresh();
  property_set(visible_count_held, "visible_count", value);
  await copy_refresh();
}
