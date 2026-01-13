import { ebible_chapter_code_pad } from "../../../love/public/src/ebible_chapter_code_pad.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_books(context) {
  marker("1");
  let root = object_property_get(context, "root");
  html_clear(root);
  let e = ebible_folder_english();
  let books = await ebible_version_books(e);
  let hash = html_hash_object_get();
  function lambda(item) {
    let book_code = object_property_get(item, "book_code");
    let text = object_property_get(item, "text");
    let chapter_code = ebible_chapter_code_pad(book_code, "1");
    function lambda3() {
      object_property_set(object, property_name, value);
    }
    let component = html_button(parent, text, lambda3);
  }
  each(books, lambda);
  log({
    books,
  });
}
