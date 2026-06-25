import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_find_property_curried_right_2 } from "../../../love/public/src/list_find_property_curried_right_2.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { ebible_folder_cebuano } from "../../../love/public/src/ebible_folder_cebuano.mjs";
import { list_first_not_is } from "../../../love/public/src/list_first_not_is.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { html_hr_2 } from "../../../love/public/src/html_hr_2.mjs";
import { html_bar_content_padding } from "../../../love/public/src/html_bar_content_padding.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function app_supper_main(context) {
  let ebible_folder = ebible_folder_cebuano;
  let folder_gets = [ebible_folder];
  folder_gets = [ebible_folder_cebuano, ebible_folder_english];
  let folders = invoke_multiple(folder_gets);
  let root = html_mobile_default(context);
  html_bar_content_padding(root);
  async function lambda3(ebible_folder) {
    let verses = await app_supper_verses_get(ebible_folder);
    return verses;
  }
  let waited = await list_map_unordered_async(folders, lambda3);
  let r = list_first_remaining(waited);
  let remaining = property_get(r, "remaining");
  let verses_first = property_get(r, "first");
  let previous_chapter_code = null;
  function lambda2(v) {
    let chapter_code = property_get(v, "chapter_code");
    let n = list_first_not_is(verses_first, v);
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
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    let mapped2 = list_map_property(list, property_name);
    html_div_text(p, text);
  }
  each(verses_first, lambda2);
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
