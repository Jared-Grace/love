import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_bible_word_sites_recent_text_get } from "./app_shared_bible_word_sites_recent_text_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_word_sites_others_text_get } from "./app_shared_bible_word_sites_others_text_get.mjs";
export function app_shared_bible_word_offers_split_draw(
  offers_split,
  draw,
  choices,
) {
  arguments_assert(arguments, 3);
  let recent_items = offers_split.recent;
  let other_items = offers_split.others;
  let labelled = greater_than(recent_items.length, 0);
  if (labelled) {
    let text = app_shared_bible_word_sites_recent_text_get();
    let recent_label = html_div_text(choices, text);
    app_shared_text_deemphasized(recent_label);
    for (let item of recent_items) {
      draw(item);
    }
    if (greater_than(other_items.length, 0)) {
      let text4 = app_shared_bible_word_sites_others_text_get();
      let others_label = html_div_text(choices, text4);
      app_shared_text_deemphasized(others_label);
    }
  }
  for (let item of other_items) {
    draw(item);
  }
}
