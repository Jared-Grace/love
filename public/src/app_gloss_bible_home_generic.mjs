import { app_gloss_bible_generate_generic_word } from "../../../love/public/src/app_gloss_bible_generate_generic_word.mjs";
import { g_sermon_generate_book_generic_property } from "../../../love/public/src/g_sermon_generate_book_generic_property.mjs";
import { emoji_arrow_down } from "../../../love/public/src/emoji_arrow_down.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { each_next } from "../../../love/public/src/each_next.mjs";
import { html_div_centered } from "../../../love/public/src/html_div_centered.mjs";
import { html_scroll_top_now } from "../../../love/public/src/html_scroll_top_now.mjs";
import { emoji_arrow_up } from "../../../love/public/src/emoji_arrow_up.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_span_text_nbsp_replace_property_from } from "../../../love/public/src/html_span_text_nbsp_replace_property_from.mjs";
import { html_span_nbsp } from "../../../love/public/src/html_span_nbsp.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_font_color_set_blue } from "../../../love/public/src/html_font_color_set_blue.mjs";
import { html_span_colon_2 } from "../../../love/public/src/html_span_colon_2.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_bold_mild } from "../../../love/public/src/html_bold_mild.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_font_color_set_green } from "../../../love/public/src/html_font_color_set_green.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_bible_home_inner } from "../../../love/public/src/app_g_bible_home_inner.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
export async function app_gloss_bible_home_generic(
  context,
  download,
  text_use,
) {
  let generated = g_sermon_generate_book_generic_property();
  let v2 = await app_g_bible_home_inner(context, download);
  let passages = property_get(v2, "passages");
  each_next(passages, on_passage);
  function on_passage(a, next) {
    let verses = property_get(a, "verses");
    let passage = property_get(a, "passage");
    const prop = "p";
    let last = list_last(verses);
    let p = property_get(last, prop);
    if (null_not_is(next)) {
      let d = html_div_centered(p);
      let text3 = emoji_arrow_down();
      async function lambda3() {
        let verses_next = property_get(next, "verses");
        await scroll(verses_next);
      }
      let component = html_button(d, text3, lambda3);
    }
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
      html_font_color_set_green(div);
    }
    each(texts, lambda5);
    let explains_json = property_get(passage, generated);
    log({
      explains_json,
    });
    let explains = json_from(explains_json);
    if (false) {
      let div3 = html_div(p);
      function lambda2(e) {
        let span = html_span_text_nbsp_replace_property_from(
          div3,
          e,
          generated,
        );
        html_font_color_set_green(span);
        html_span_nbsp(div3);
        let span2 = html_span_text_nbsp_replace_property_from(div3, e, "gloss");
        html_font_color_set_blue(span2);
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
      html_font_color_set(span, "#e40000ff");
      let c = html_span_colon_2(div2);
      html_font_color_set(c, "#aaa");
      let span2 = html_span_text(div2, gloss);
      html_font_color_set_blue(span2);
      let c2 = html_span_colon_2(div2);
      html_font_color_set(c2, "#aaa");
      let span3 = html_span_text(div2, explain);
      html_font_color_set(span3, "#7b3f97ff");
    }
    each(explains, lambda);
    async function lambda6() {
      await scroll(verses);
    }
    let text2 = emoji_arrow_up();
    let d = html_div_centered(p);
    let component = html_button(d, text2, lambda6);
    let component22 = html_hr(p);
    return;
  }
  async function scroll(verses) {
    let f = list_first(verses);
    let p = property_get(f, "p_verse");
    log({
      p,
      verses,
    });
    await html_scroll_top_now(p);
  }
}
