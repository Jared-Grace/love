import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_bold_mild } from "../../../love/public/src/html_bold_mild.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
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
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { app_karate_button_background } from "../../../karate_code/public/src/app_karate_button_background.mjs";
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
      let c = app_karate_button_background();
      html_font_color_set(div, c);
    }
    each(texts, lambda5);
    let explains_json = object_property_get(passage, "explains");
    let explains = json_from(explains_json);
    function lambda(e) {
      let div2 = html_div(root);
      let ceb = object_property_get(e, "ceb");
      let gloss = object_property_get(e, "gloss");
      let explain = object_property_get(e, "explain");
      let span = html_span_text(p, ceb);
      html_bold_mild(span);
      html_span_space(p);
      let span2 = html_span_text(p, gloss);
      html_span_space(p);
      let span3 = html_span_text(p, explain);
    }
    each(explains, lambda);
    log(passage);
    return;
  }
}
