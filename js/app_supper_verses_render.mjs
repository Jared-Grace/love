import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { app_supper_texts_colored } from "./app_supper_texts_colored.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { log } from "./log.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_curried_right_2 } from "./list_find_property_curried_right_2.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_p } from "./html_p.mjs";
import { app_shared_container_plain } from "./app_shared_container_plain.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { app_supper_verses_get } from "./app_supper_verses_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_supper_verses_render(root, folders) {
  let waited = await list_map_unordered_async(folders, app_supper_verses_get);
  let r = list_first_remaining(waited);
  let remaining = property_get(r, "remaining");
  let verses_first = property_get(r, "first");
  let previous_chapter_code = null;
  let card = null;
  function lambda2(v) {
    let chapter_code = property_get(v, "chapter_code");
    if (equal_not(chapter_code, previous_chapter_code)) {
      card = app_shared_container_plain(root);
    }
    previous_chapter_code = chapter_code;
    let reference = property_get(v, "reference");
    let p = html_p(card);
    html_style_margin_y(p, "0.25em");
    let d = html_div_text_centered(p, reference);
    html_font_color_set(d, "#1e3a8a");
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    log(app_supper_verses_render.name, {
      mapped,
    });
    let texts = list_map_property(mapped, "text");
    app_supper_texts_colored(p, texts);
  }
  each(verses_first, lambda2);
  let prayer_card = app_shared_container_plain(root);
  function lambda(item) {
    let p2 = html_p_text(
      prayer_card,
      text_combine_multiple([
        "Heavenly Father, in the name of the Father, and of the Son, and of the Holy Spirit: Have mercy on me a sinner. Thanks. Help. Bless this ",
        item,
        ". Amen.",
      ]),
    );
    html_style_margin_y(p2, "0.25em");
  }
  each(["bread", "fruit of the vine"], lambda);
  let p3 = html_p_text(prayer_card, "Sing hymn");
  html_style_margin_y(p3, "0.25em");
}
