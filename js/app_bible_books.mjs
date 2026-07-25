import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_bible_chapter_set } from "./app_bible_chapter_set.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_bible_books_render } from "./app_bible_books_render.mjs";
export async function app_bible_books(context) {
  let root = html_clear_context(context);
  await app_bible_button_back_to_reader(root, context);
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  async function on_open(book) {
    "open a chosen book at its first chapter, then hand off to the chapter picker";
    let book_code = property_get(book, "book_code");
    let chapter_code = ebible_chapter_code_pad(book_code, "1");
    app_bible_chapter_set(chapter_code);
    await app_shared_screen_set(context, app_bible_chapters);
  }
  ("a search box on top for readers who know the name, and the full canon grouped by section below for readers who browse");
  let search = html_input_placeholder_wide(root, "Search books");
  html_style_set(search, "font-size", "1.15em");
  html_style_padding_y(search, "0.4em");
  html_style_margin_y(search, "0.5em");
  let list_div = html_div(root);
  function on_input() {
    let query = html_value_get(search);
    app_bible_books_render(list_div, query, books, on_open);
  }
  html_on_input(search, on_input);
  app_bible_books_render(list_div, "", books, on_open);
}
