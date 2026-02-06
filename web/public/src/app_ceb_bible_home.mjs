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
      let first = list_first("verse_number");
      object_property_set(ve, property_name, first);
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
