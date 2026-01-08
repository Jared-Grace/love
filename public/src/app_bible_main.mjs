import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
export async function app_bible_main(context) {
  let root = html_mobile_default(context);
  firebase_name_jg();
  html_margin_0(root);
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let div = html_div_text(root2, text2);
  let verses = await ebible_verses(e, chapter_code);
  function lambda(v) {
    let verse_number_v = object_property_get(v, "verse_number");
    let text = object_property_get(v, "text");
    let p = html_p_text(content, verse_number_v + " " + text);
  }
  each(verses, lambda);
}
