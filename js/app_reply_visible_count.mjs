import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_reply_buttons_languages } from "./app_reply_buttons_languages.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { list_add } from "./list_add.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { multiply } from "./multiply.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_reply_lambda2 } from "./app_reply_lambda2.mjs";
import { each } from "./each.mjs";
export function app_reply_visible_count(
  card,
  love,
  languages_chosen,
  languages,
  root,
  update,
) {
  arguments_assert(arguments, 6);
  app_shared_button(card, "❤️", love);
  let buttons_languages = app_reply_buttons_languages(
    languages_chosen,
    card,
    languages,
  );
  let card2 = app_shared_container_blue(root);
  app_shared_text_body(
    card2,
    "2. How many Bible passages do you want? This will reset any responses below. You may need to choose 'Copy' button.",
  );
  let choices_verse_count = [];
  function lambda10(item2) {
    list_add(choices_verse_count, item2);
  }
  each_range_from(1, 4, lambda10);
  function lambda4(item) {
    let c = multiply(item, 2);
    list_add(choices_verse_count, c);
  }
  each_range_from(3, 6, lambda4);
  list_add_multiple(choices_verse_count, [20, 40]);
  function lambda2(c) {
    let r3 = app_reply_lambda2(c, update, card2);
    return r3;
  }
  each(choices_verse_count, lambda2);
  let visible_count = null;
  let r = {
    buttons_languages,
    card2,
    visible_count,
  };
  return r;
}
