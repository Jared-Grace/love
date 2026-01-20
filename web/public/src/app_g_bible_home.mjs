import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_textarea } from "../../../love/public/src/html_textarea.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { g_sermon_generate_download } from "../../../love/public/src/g_sermon_generate_download.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_home(context) {
  marker("1");
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let verse_number = object_property_get(a, "verse_number");
    let chapter_code = object_property_get(a, "chapter_code");
    let value = await g_sermon_generate_download(chapter_code);
    let passages = object_property_get(value, "passages");
    function lambda2(passage) {
      let verse_numbers = object_property_get(passage, "verse_numbers");
      let mapped = list_map(verse_numbers, integer_to);
      let max = list_max(mapped);
      let s = string_to(max);
      if (equal(s, verse_number)) {
        let sermon = object_property_get(passage, "sermon");
        let mapped2 = app_g_openai_split(sermon);
        let component = html_textarea(div);
        html_value_set(input, value2);
        let o = json_to(passage);
        let p2 = html_p_text_multiple(p, mapped2);
      }
    }
    each(passages, lambda2);
  }
  await app_bible_home_generic(context, lambda);
}
