import { html_button } from "../../../love/public/src/html_button.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { html_mobile_default_font_size } from "../../../love/public/src/html_mobile_default_font_size.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { html_rows_set } from "../../../love/public/src/html_rows_set.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_textarea } from "../../../love/public/src/html_textarea.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { g_sermon_generate_download } from "../../../love/public/src/g_sermon_generate_download.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_home(context) {
  marker("1");
  let value = null;
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let verse_number = object_property_get(a, "verse_number");
    let chapter_code = object_property_get(a, "chapter_code");
    value = await g_sermon_generate_download(chapter_code);
    let passages = object_property_get(value, "passages");
    function lambda2(passage) {
      let verse_numbers = object_property_get(passage, "verse_numbers");
      let mapped = list_map(verse_numbers, integer_to);
      let max = list_max(mapped);
      let s = string_to(max);
      if (equal(s, verse_number)) {
        let sermon = object_property_get(passage, "sermon");
        let mapped2 = app_g_openai_split(sermon);
        let size = list_size(mapped2);
        let joined = list_join_newline(mapped2);
        let ta = html_textarea(p);
        html_mobile_default_font_size(ta);
        html_width_full(ta);
        html_rows_set(ta, size);
        html_value_set(ta, joined);
        let v = function lambda3() {};
        return v;
      }
    }
    each(passages, lambda2);
  }
  let r = await app_bible_home_generic(context, lambda);
  let bar = object_property_get(r, "bar");
  async function lambda4() {
    await firebase_upload_object_compressed(destination, value);
  }
  let component2 = html_button(bar, "Update", lambda4);
}
