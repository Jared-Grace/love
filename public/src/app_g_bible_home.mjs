import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { g_sermon_generate_download } from "../../../love/public/src/g_sermon_generate_download.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_home(context) {
  marker("1");
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let verse_number = object_property_get(a, "verse_number");
    let chapter_code = object_property_get(a, "chapter_code");
    let value = await g_sermon_generate_download(chapter_code);
    let o = json_to(value);
    let passages = object_property_get(o, "passages");
    function lambda2(passage) {
      let verse_numbers = object_property_get(passage, "verse_numbers");
      let mapped = list_map(verse_numbers, integer_to);
      let max = list_max(mapped);
      let s = string_to(max);
    }
    each(passages, lambda2);
    let p2 = html_p_text(p, o);
  }
  await app_bible_home_generic(context, lambda);
}
