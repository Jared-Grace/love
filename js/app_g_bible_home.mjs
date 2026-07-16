import { firebase_upload_object_compressed_browser } from "../../love/js/firebase_upload_object_compressed_browser.mjs";
import { each } from "../../love/js/each.mjs";
import { list_last } from "../../love/js/list_last.mjs";
import { g_sermon_generate_download } from "../../love/js/g_sermon_generate_download.mjs";
import { app_g_bible_home_inner } from "../../love/js/app_g_bible_home_inner.mjs";
import { list_adder_async } from "../../love/js/list_adder_async.mjs";
import { invoke_multiple } from "../../love/js/invoke_multiple.mjs";
import { g_sermon_generate_upload_path } from "../../love/js/g_sermon_generate_upload_path.mjs";
import { property_set } from "../../love/js/property_set.mjs";
import { text_replace } from "../../love/js/text_replace.mjs";
import { newline_windows } from "../../love/js/newline_windows.mjs";
import { newline } from "../../love/js/newline.mjs";
import { html_value_get } from "../../love/js/html_value_get.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { html_mobile_default_font_size } from "../../love/js/html_mobile_default_font_size.mjs";
import { html_width_full } from "../../love/js/html_width_full.mjs";
import { list_size } from "../../love/js/list_size.mjs";
import { html_rows_set } from "../../love/js/html_rows_set.mjs";
import { list_join_newline } from "../../love/js/list_join_newline.mjs";
import { html_value_set } from "../../love/js/html_value_set.mjs";
import { html_textarea } from "../../love/js/html_textarea.mjs";
import { app_g_openai_split } from "../../love/js/app_g_openai_split.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { property_get } from "../../love/js/property_get.mjs";
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
  let component = app_shared_button(bar, "Update", lambda4);
}
