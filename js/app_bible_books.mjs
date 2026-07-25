import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_bible_chapter_set } from "./app_bible_chapter_set.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
export async function app_bible_books(context) {
  let root = html_clear_context(context);
  await app_bible_button_back_to_reader(root, context);
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  function lambda(item) {
    let book_code = property_get(item, "book_code");
    let text = property_get(item, "text");
    async function lambda3() {
      let chapter_code = ebible_chapter_code_pad(book_code, "1");
      app_bible_chapter_set(chapter_code);
      await app_shared_screen_set(context, app_bible_chapters);
    }
    let component = app_shared_button(root, text, lambda3);
  }
  each(books, lambda);
  log(app_bible_books.name, {
    books,
  });
}
