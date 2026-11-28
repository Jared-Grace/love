import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_overlay_card_closable } from "./app_shared_overlay_card_closable.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { equal } from "./equal.mjs";
import { app_shared_bible_word_sound_buttons } from "./app_shared_bible_word_sound_buttons.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_shared_biblehub_word_button } from "./app_shared_biblehub_word_button.mjs";
import { bible_word_article_site_chosen } from "./bible_word_article_site_chosen.mjs";
import { window_open } from "./window_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_word_overlay_articles_open_offer_draw(
  word,
  language_code,
  strong_url,
  chapter_code,
  verse_number,
) {
  arguments_assert(arguments, 5);
  let overlay = app_shared_overlay_card_closable();
  let card = property_get(overlay, "body");
  let big = property_get(overlay, "title");
  html_text_set(big, word);
  html_attribute_set(big, "dir", "auto");
  html_style_assign(big, {
    "font-size": "2em",
    "font-weight": "bold",
    "margin-bottom": "0.5em",
  });
  let choices = html_div(card);
  html_style_assign(choices, {
    display: "flex",
    "flex-direction": "column",
    gap: "0.5em",
  });
  let right = ebible_language_en_code();
  if (equal(language_code, right)) {
    app_shared_bible_word_sound_buttons(
      choices,
      word,
      chapter_code,
      verse_number,
    );
  }
  let b = null_is(strong_url);
  if (not(b)) {
    app_shared_biblehub_word_button(choices, strong_url);
  }
  function offer_draw(offer) {
    let site = offer.site;
    let about = offer.article[1];
    let file = offer.article[2];
    function read() {
      bible_word_article_site_chosen(site.name);
      let url = site.url(file);
      window_open(url);
    }
    ("the article's name is quoted, asked for by the human 2026-11-01, so a name of several words - Valley of Succoth - reads as one thing rather than running into the words around it");
    let label = text_combine_multiple(["📖 Open “", about, "” on ", site.name]);
    app_shared_button(choices, label, read);
  }
  let r = {
    choices,
    offer_draw,
  };
  return r;
}
