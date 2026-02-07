import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { html_font_color_set_blue } from "../../../love/public/src/html_font_color_set_blue.mjs";
import { html_span_colon_2 } from "../../../love/public/src/html_span_colon_2.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_font_color_set_green } from "../../../love/public/src/html_font_color_set_green.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_bold_mild } from "../../../love/public/src/html_bold_mild.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_colon_3 } from "../../../love/public/src/string_colon_3.mjs";
import { string_colon_2 } from "../../../love/public/src/string_colon_2.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_g_bible_home_inner } from "../../../love/public/src/app_g_bible_home_inner.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_ceb_bible_gloss_generate_download } from "../../../love/public/src/app_ceb_bible_gloss_generate_download.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_ceb_bible_home(context) {
  await app_g_bible_home_inner(
    context,
    on_passage,
    app_ceb_bible_gloss_generate_download,
  );
  function on_passage(passage, p) {
    let text = object_property_get(passage, "text");
    let separator3 = string_colon_3();
    let split3 = string_split(text, separator3);
    function lambda4(v) {
      let separator2 = string_colon_2();
      let split = string_split(v, separator2);
      let text_ceb = list_first(split);
      return text_ceb;
    }
    let texts = list_map(split3, lambda4);
    function lambda5(t) {
      let div = html_div_text(p, t);
      html_font_color_set_blue(div);
    }
    each(texts, lambda5);
    let explains_json = object_property_get(passage, "explains");
    let explains = json_from(explains_json);
    function lambda(e) {
      let component2 = html_hr(p);
      let div2 = html_div(p);
      let ceb = object_property_get(e, "ceb");
      let gloss = object_property_get(e, "gloss");
      let explain = object_property_get(e, "explain");
      let span = html_span_text(div2, ceb);
      html_bold_mild(span);
      html_font_color_set_blue(span);
      let c = html_span_colon_2(div2);
      html_font_color_set(c, "#aaa");
      let span2 = html_span_text(div2, gloss);
      html_font_color_set_green(span2);
      let c2 = html_span_colon_2(div2);
      html_font_color_set(c2, "#aaa");
      let span3 = html_span_text(div2, explain);
      html_font_color_set(c2, "#9400d8ff");
    }
    each(explains, lambda);
    log(passage);
    return;
  }
}
