import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { html_hr_2 } from "../../../love/public/src/html_hr_2.mjs";
import { html_bar_content_padding } from "../../../love/public/src/html_bar_content_padding.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
export async function app_supper_main(context) {
  firebase_name_jg();
  let root = html_mobile_default(context);
  html_bar_content_padding(root);
  let verses = await app_supper_verses_get();
  let previous_chapter_code = null;
  function lambda2(v) {
    let v2 = list_first_is(verses, v);
    let n = not(v2);
    let chapter_code = property_get(v, "chapter_code");
    if (n) {
      if (equal_not(chapter_code, previous_chapter_code)) {
        html_hr_2(root);
      }
    }
    previous_chapter_code = chapter_code;
    let text = property_get(v, "text");
    let reference = property_get(v, "reference");
    let p = html_p(root);
    let d = html_div_text_centered(p, reference);
    html_font_color_set(d, "#aaa");
    html_div_text(p, text);
  }
  each(verses, lambda2);
  html_hr_2(root);
  function lambda(item) {
    let p2 = html_p_text(
      root,
      "Heavenly Father, in the name of the Father, and of the Son, and of the Holy Spirit: Have mercy on me a sinner. Thanks. Help. Bless this " +
        item +
        ". Amen.",
    );
  }
  each(["bread", "fruit of the vine"], lambda);
  let p3 = html_p_text(root, "Sing hymn");
}
