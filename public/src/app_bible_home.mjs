import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_home(context) {
  marker("1");
  let root = html_mobile_default(context);
  firebase_name_jg();
  html_margin_0(root);
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  html_centered(bar);
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
