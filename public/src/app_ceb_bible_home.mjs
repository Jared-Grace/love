import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_ceb_bible_home(context) {
  let value = null;
  let chapter_code = null;
  let r = null;
  async function lambda5(la) {
    async function lambda(a) {
      let p = object_property_get(a, "p");
      let verse_number = object_property_get(a, "verse_number");
      chapter_code = object_property_get(a, "chapter_code");
      let verses = await ebible_verses("cebulb", chapter_code);
      let item = list_find_property(verses, "verse_number", verse_number);
      let text = object_property_get(item, "text");
      let div = html_div_text(p, text);
    }
    r = await app_bible_home_generic(context, lambda);
  }
  let updates = await list_adder_async(lambda5);
  let bar = object_property_get(r, "bar");
  async function lambda4() {
    invoke_multiple(updates);
    let destination = g_sermon_generate_upload_path(chapter_code);
    await firebase_upload_object_compressed(destination, value);
  }
  let component2 = html_button(bar, "Update", lambda4);
}
