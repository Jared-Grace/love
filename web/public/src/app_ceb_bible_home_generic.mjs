import { log } from "../../../love/public/src/log.mjs";
import { html_font_color_set_blue } from "../../../love/public/src/html_font_color_set_blue.mjs";
import { html_span_colon_2 } from "../../../love/public/src/html_span_colon_2.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_bold_mild } from "../../../love/public/src/html_bold_mild.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_font_color_set_green } from "../../../love/public/src/html_font_color_set_green.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { string_colon_2 } from "../../../love/public/src/string_colon_2.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { string_colon_3 } from "../../../love/public/src/string_colon_3.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_bible_home_inner } from "../../../love/public/src/app_g_bible_home_inner.mjs";
import { list_second } from "./list_second.mjs";
export async function app_ceb_bible_home_generic(
  context,
  download,
  language_code,
  text_use,
) {
  await app_g_bible_home_inner(context, on_passage, download);
  function on_passage(passage, p) {
    log({
      passage,
    });
    let texts = null;
    if (text_use) {
      let text = object_property_get(passage, "text");
      let separator3 = string_colon_3();
      let split3 = string_split(text, separator3);
      function lambda4(v) {
        let separator2 = string_colon_2();
        let split = string_split(v, separator2);
        let get = null;
        if (text_use) {
          get = list_first;
        } else {
          get = list_second;
        }
        let text_ceb = list_first(split);
        return text_ceb;
      }
      texts = list_map(split3, lambda4);
    } else {
      let original = object_property_get(passage, "original");
      texts = [original];
    }
    if (false) {
      function lambda5(t) {
        let div = html_div_text(p, t);
        html_font_color_set_green(div);
      }
      each(texts, lambda5);
    }
    let explains_json = object_property_get(passage, "explains");
    let explains = json_from(explains_json);
    function lambda2(item) {}
    each(explains, lambda2);
    function lambda(e) {
      let component2 = html_hr(p);
      let div2 = html_div(p);
      let ceb = object_property_get(e, language_code);
      let gloss = object_property_get(e, "gloss");
      let explain = object_property_get(e, "explain");
      let span = html_span_text(div2, ceb);
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
    return;
  }
}
