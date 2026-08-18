import { app_shared_gloss_bible_generated_gloss_span } from "./app_shared_gloss_bible_generated_gloss_span.mjs";
import { app_shared_gloss_bible_word_row } from "./app_shared_gloss_bible_word_row.mjs";
import { app_shared_gloss_bible_home_generic_scroll } from "./app_shared_gloss_bible_home_generic_scroll.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic_property } from "./g_sermon_generate_book_generic_property.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
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
  ("the way back to the top sits BELOW the closing line, not above it. everything between the two lines is the reading - the verse, its wording, its words explained - and a way out standing inside that block reads as one more thing to read. under the line it lands next to the previous-verse and next-verse arrows the screen adds straight after, so a reader looking to move has one place to look rather than two.");
  html_hr(p);
  async function lambda6() {
    await app_shared_gloss_bible_home_generic_scroll(verses);
  }
  let text = emoji_arrow_up();
  app_shared_button_wide(p, text, lambda6);
}
