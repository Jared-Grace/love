import { json_from_try } from "../../love/js/json_from_try.mjs";
import { app_gloss_bible_generate_generic_word } from "../../love/js/app_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic_property } from "../../love/js/g_sermon_generate_book_generic_property.mjs";
import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_scroll_top_now } from "../../love/js/html_scroll_top_now.mjs";
import { emoji_arrow_up } from "../../love/js/emoji_arrow_up.mjs";
import { list_last } from "../../love/js/list_last.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_span_text_nbsp_replace_property_from } from "../../love/js/html_span_text_nbsp_replace_property_from.mjs";
import { html_span_nbsp } from "../../love/js/html_span_nbsp.mjs";
import { log } from "../../love/js/log.mjs";
import { html_font_color_set_white } from "../../love/js/html_font_color_set_white.mjs";
import { html_span_colon_2 } from "../../love/js/html_span_colon_2.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { html_bold_mild } from "../../love/js/html_bold_mild.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_hr } from "../../love/js/html_hr.mjs";
import { each } from "../../love/js/each.mjs";
import { html_font_color_set_green } from "../../love/js/html_font_color_set_green.mjs";
import { html_div_text } from "../../love/js/html_div_text.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { list_empty_is } from "../../love/js/list_empty_is.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_g_bible_home_inner } from "../../love/js/app_g_bible_home_inner.mjs";
import { html_span_space } from "../../love/js/html_span_space.mjs";
export async function app_gloss_bible_home_generic(
  context,
  download,
  text_use,
) {
  let generated = g_sermon_generate_book_generic_property();
  let v = await app_g_bible_home_inner(context, download);
  let passages = property_get(v, "passages");
  if (list_empty_is(passages)) {
    return;
  }
  let first2 = list_first(passages);
  let verses = property_get(first2, "verses");
  let passage = property_get(first2, "passage");
  let prop = "p";
  let last = list_last(verses);
  let p = property_get(last, prop);
  let h = html_hr(p);
  let texts = null;
  if (text_use) {
    let passage_texts = property_get(passage, "texts");
    let first = list_first(passage_texts);
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
      let span4 = html_span_space(div3);
    }
    each(explains, lambda2);
  }
  let word_property = app_gloss_bible_generate_generic_word();
  function lambda(e) {
    let component2 = html_hr(p);
    let div2 = html_div(p);
    let word = property_get(e, word_property);
    let gloss = property_get(e, "gloss");
    let explain = property_get(e, "explain");
    let span = html_span_text(div2, word);
    html_bold_mild(span);
    html_font_color_set(span, "#b91c1cff");
    let c = html_span_colon_2(div2);
    html_font_color_set(c, "#aaa");
    let span2 = html_span_text(div2, gloss);
    html_font_color_set(span2, "#1d4ed8ff");
    let c2 = html_span_colon_2(div2);
    html_font_color_set(c2, "#aaa");
    let span3 = html_span_text(div2, explain);
    html_font_color_set(span3, "#a21cafff");
  }
  each(explains, lambda);
  async function lambda6() {
    await scroll(verses);
  }
  let text = emoji_arrow_up();
  let component = app_shared_button_wide(p, text, lambda6);
  let component22 = html_hr(p);
  return;
  async function scroll(verses) {
    let f = list_first(verses);
    let p = property_get(f, "p_verse");
    log(app_gloss_bible_home_generic.name, {
      p,
      verses,
    });
    await html_scroll_top_now(p);
  }
}
