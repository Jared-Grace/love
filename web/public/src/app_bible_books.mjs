import { app_bible_chapter_set } from "../../../love/public/src/app_bible_chapter_set.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "../../../love/public/src/ebible_chapter_code_pad.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_bible_books(context) {
  let root = html_clear_context(context);
  let e = ebible_folder_english();
  let books = await ebible_version_books(e);
  let hash = html_hash_object_get();
  function lambda(item) {
    let book_code = property_get(item, "book_code");
    let text = property_get(item, "text");
    function lambda3() {
      let chapter_code = ebible_chapter_code_pad(book_code, "1");
      app_bible_chapter_set(hash, chapter_code);
      app_shared_screen_set(context, app_bible_chapters);
    }
    let component = html_button(root, text, lambda3);
  }
  each(books, lambda);
  log({
    books,
  });
}
