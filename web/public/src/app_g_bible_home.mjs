import { app_g_bible_home_inner } from "../../../love/public/src/app_g_bible_home_inner.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
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
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_g_bible_home(context) {
  let downloaded = null;
  let chapter_code = null;
  let r = null;
  async function lambda5(la) {
    ({ chapter_code, downloaded, r } = await app_g_bible_home_inner(
      on_passage,
      context,
    ));
    function on_passage(passage, p) {
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
  }
  let updates = await list_adder_async(lambda5);
  let bar = object_property_get(r, "bar");
  async function lambda4() {
    invoke_multiple(updates);
    let destination = g_sermon_generate_upload_path(chapter_code);
    await firebase_upload_object_compressed(destination, downloaded);
  }
  let component2 = html_button(bar, "Update", lambda4);
}
