import { firebase_upload_object_compressed_browser } from "./firebase_upload_object_compressed_browser.mjs";
import { each } from "./each.mjs";
import { list_last } from "./list_last.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
import { app_g_bible_home_inner } from "./app_g_bible_home_inner.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { g_sermon_generate_upload_path } from "./g_sermon_generate_upload_path.mjs";
import { property_set } from "./property_set.mjs";
import { text_replace } from "./text_replace.mjs";
import { newline_windows } from "./newline_windows.mjs";
import { newline } from "./newline.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_mobile_default_font_size } from "./html_mobile_default_font_size.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { list_size } from "./list_size.mjs";
import { html_rows_set } from "./html_rows_set.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { app_g_openai_split } from "./app_g_openai_split.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_bible_home(context) {
  let downloaded = null;
  let chapter_code = null;
  let r = null;
  async function lambda5(la) {
    let passages = null;
    ({ chapter_code, downloaded, r, passages } = await app_g_bible_home_inner(
      context,
      g_sermon_generate_download,
    ));
    function on_passage({ passage, verses }) {
      let last = list_last(verses);
      let p = property_get(last, "p");
      let sermon = property_get(passage, "sermon");
      let mapped = app_g_openai_split(sermon);
      let size = list_size(mapped);
      let joined = list_join_newline(mapped);
      let ta = html_textarea(p);
      html_mobile_default_font_size(ta);
      html_width_full(ta);
      html_rows_set(ta, size);
      html_value_set(ta, joined);
      let update = function lambda3() {
        let value = html_value_get(ta);
        let from = newline();
        let to = newline_windows();
        let replaced = text_replace(value, from, to);
        property_set(passage, "sermon", replaced);
      };
      la(update);
    }
    each(passages, on_passage);
  }
  let updates = await list_adder_async(lambda5);
  if (null_is(r)) {
    return;
  }
  let bar = property_get(r, "bar");
  async function lambda4() {
    invoke_multiple(updates);
    let destination = g_sermon_generate_upload_path(chapter_code);
    await firebase_upload_object_compressed_browser(destination, downloaded);
  }
  let component = html_button(bar, "Update", lambda4);
}
