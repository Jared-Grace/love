import { g_sermon_generate_book_generic_property } from "./g_sermon_generate_book_generic_property.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { html_hr } from "./html_hr.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { each } from "./each.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_gloss_bible_generated_gloss_span } from "./app_shared_gloss_bible_generated_gloss_span.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { app_shared_gloss_bible_word_row } from "./app_shared_gloss_bible_word_row.mjs";
import { app_shared_gloss_bible_home_generic_scroll } from "./app_shared_gloss_bible_home_generic_scroll.mjs";
import { app_shared_bible_top_ask_key } from "./app_shared_bible_top_ask_key.mjs";
import { property_set } from "./property_set.mjs";
export async function app_shared_gloss_bible_home_generic(
  context,
  download,
  text_use,
  app_fn,
) {
  let generated = g_sermon_generate_book_generic_property();
  let v = await app_shared_bible_home_inner(context, download, app_fn);
  let passages = property_get(v, "passages");
  if (list_empty_is(passages)) {
    return;
  }
  let first2 = list_first(passages);
  let verses = property_get(first2, "verses");
  let passage = property_get(first2, "passage");
  let prop = "p";
  let p = list_last_property(verses, prop);
  html_hr(p);
  let texts = null;
  if (text_use) {
    let first = property_list_first(passage, "texts");
    texts = [first];
  } else {
    texts = property_get(passage, "originals");
  }
  function lambda5(t) {
    let div = html_div_text(p, t);
    html_font_color_set(div, "#15803dff");
  }
  each(texts, lambda5);
  let explains_json = property_get(passage, generated);
  let explains = json_from_try(explains_json);
  if (false) {
    let div3 = html_div(p);
    function lambda2(e) {
      let r2 = app_shared_gloss_bible_generated_gloss_span(e, div3, generated);
      return r2;
    }
    each(explains, lambda2);
  }
  let word_property = app_shared_gloss_bible_generate_generic_word();
  function lambda(e) {
    let r = app_shared_gloss_bible_word_row(e, p, word_property);
    return r;
  }
  each(explains, lambda);
  ("the reading is closed off with a line and nothing is put after it. What was there was a button across the whole width saying go back to the top, and it could only be pressed by somebody who had already scrolled to the very bottom - which is the one place a reader who wants to go up is not.");
  html_hr(p);
  ("so the way back to the top is left here for the row of arrows the page holds against its foot to pick up, and it is a way of doing it rather than a button, because where it is drawn is that row's business and not this screen's.");
  async function lambda6() {
    await app_shared_gloss_bible_home_generic_scroll(verses);
  }
  let key = app_shared_bible_top_ask_key();
  property_set(context, key, lambda6);
}
