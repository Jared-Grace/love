import { log } from "../../../love/public/src/log.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_rows_set } from "../../../love/public/src/html_rows_set.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_mobile_default_font_size } from "../../../love/public/src/html_mobile_default_font_size.mjs";
import { html_textarea } from "../../../love/public/src/html_textarea.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { app_g_bible_home_inner } from "../../../love/public/src/app_g_bible_home_inner.mjs";
import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_ceb_bible_gloss_generate_download } from "../../../love/public/src/app_ceb_bible_gloss_generate_download.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { app_karate_button_background } from "../../../karate_code/public/src/app_karate_button_background.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_ceb_bible_home(context) {
  await app_g_bible_home_inner(
    context,
    on_passage,
    app_ceb_bible_gloss_generate_download,
  );
  function on_passage(passage, p) {
    log({
      passage,
    });
    return;
    let sermon = object_property_get(passage, "sermon");
    let mapped2 = app_g_openai_split(sermon);
    let size = list_size(mapped2);
    let joined = list_join_newline(mapped2);
    let ta = html_textarea(p);
    html_mobile_default_font_size(ta);
    html_width_full(ta);
    html_rows_set(ta, size);
    html_value_set(ta, joined);
    let update = function lambda3() {
      let value2 = html_value_get(ta);
      let from = newline();
      let to = newline_windows();
      let replaced = string_replace(value2, from, to);
      object_property_set(passage, "sermon", replaced);
    };
    la(update);
  }
  return;
  let chapter_code = null;
  let r = null;
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let verse_number = object_property_get(a, "verse_number");
    chapter_code = object_property_get(a, "chapter_code");
    let verses_explains =
      await app_ceb_bible_gloss_generate_download(chapter_code);
    function lambda2(ve) {
      let verse_numbers = object_property_get(ve, "verse_numbers");
      let first = list_first(verse_numbers);
      object_property_set(ve, "verse_number", first);
    }
    each(verses_explains, lambda2);
    let verses_ceb = await ebible_verses("cebulb", chapter_code);
    let item = list_find_property(verses_ceb, "verse_number", verse_number);
    let only = list_find_property_or_null(list, property_name2, property_value);
    let text = object_property_get(item, "text");
    let div = html_div_text(p, text);
    let c = app_karate_button_background();
    html_font_color_set(div, c);
  }
  r = await app_bible_home_generic(context, lambda);
}
