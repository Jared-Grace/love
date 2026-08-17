import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bible_passage_button_direct } from "./app_g_bible_passage_button_direct.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { list_add } from "./list_add.mjs";
export function app_g_gospel_build_wrong(
  container,
  discern,
  verse_wrong,
  player,
  passage,
  chapter_code,
) {
  arguments_assert(arguments, 6);
  let lambda = invoke_once(lambda3);
  function on_wrong() {
    if (app_g_discern_prevent(discern)) {
      return;
    }
    lambda();
  }
  let reference = property_get(verse_wrong, "reference");
  let verse_text = property_get(verse_wrong, "text");
  let b = app_g_bible_passage_button_direct(
    reference,
    verse_text,
    container,
    on_wrong,
  );
  function lambda3() {
    app_g_button_wrong(b);
    let review = property_get(player, "review");
    let verse_numbers = property_get(passage, "verse_numbers");
    list_add(review, {
      chapter_code,
      verse_numbers,
    });
  }
  return b;
}
