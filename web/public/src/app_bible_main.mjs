import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { ebible_chapter_code_parse } from "../../../love/public/src/ebible_chapter_code_parse.mjs";
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
  html_centered(div);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let v2 = ebible_chapter_code_parse(chapter_code);
  let chapter_name = object_property_get(v2, "chapter_name");
  let book_code = object_property_get(v2, "book_code");
  let books = await ebible_version_books(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  function lambda3() {}
  let component = html_button(bar, book_name, lambda3);
  function lambda4() {}
  let component2 = html_button(bar, chapter_name, lambda4);
  let verses = await ebible_verses(e, chapter_code);
  function lambda(v) {
    let verse_number_v = object_property_get(v, "verse_number");
    let text = object_property_get(v, "text");
    let p = html_p_text(content, verse_number_v + " " + text);
  }
  each(verses, lambda);
}
