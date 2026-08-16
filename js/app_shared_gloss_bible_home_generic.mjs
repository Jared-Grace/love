import { app_shared_gloss_bible_word_row } from "./app_shared_gloss_bible_word_row.mjs";
import { app_shared_gloss_bible_home_generic_scroll } from "./app_shared_gloss_bible_home_generic_scroll.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic_property } from "./g_sermon_generate_book_generic_property.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { html_span_text_nbsp_replace_property_from } from "./html_span_text_nbsp_replace_property_from.mjs";
import { html_span_nbsp } from "./html_span_nbsp.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { html_font_color_set_green } from "./html_font_color_set_green.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { html_span_space } from "./html_span_space.mjs";
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
      let span = html_span_text_nbsp_replace_property_from(div3, e, generated);
      html_font_color_set_green(span);
      html_span_nbsp(div3);
      let span2 = html_span_text_nbsp_replace_property_from(div3, e, "gloss");
      html_font_color_set_white(span2);
      html_span_space(div3);
    }
    each(explains, lambda2);
  }
  let word_property = app_shared_gloss_bible_generate_generic_word();
  function lambda(e) {
    let r = app_shared_gloss_bible_word_row(e, p, word_property);
    return r;
  }
  each(explains, lambda);
  async function lambda6() {
    await app_shared_gloss_bible_home_generic_scroll(verses);
  }
  let text = emoji_arrow_up();
  app_shared_button_wide(p, text, lambda6);
  html_hr(p);
}
