import { not } from "../../../love/public/src/not.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_main(context) {
  marker("1");
  firebase_name_jg();
  let root = html_mobile_default(context);
  let verses = await app_supper_verses_get();
  function lambda2(v) {
    let v2 = list_first_is(verses, v);
    let n = not(v2);
    if (false) {
    }
    let text = object_property_get(v, "text");
    let reference = object_property_get(v, "reference");
    let p = html_p(root);
    let d = html_div_text_centered(p, reference);
    html_font_color_set(d, "#aaa");
    html_div_text(p, text);
  }
  each(verses, lambda2);
}
