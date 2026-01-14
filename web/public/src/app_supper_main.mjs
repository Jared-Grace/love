import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_main(context) {
  marker("1");
  firebase_name_jg();
  let root = html_mobile_default(context);
  let list = await app_supper_verses_get();
  function lambda2(v) {
    let text = object_property_get(v, "text");
    let reference = object_property_get(v, "reference");
    let p = html_p_text(root, reference);
    html_centered(div);
    html_font_color_set(p, "#aaa");
    html_p_text(root, text);
  }
  each(list, lambda2);
}
