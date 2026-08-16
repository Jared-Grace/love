import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_centered } from "./html_centered.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
import { html_button_bible_chapter_open } from "./html_button_bible_chapter_open.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_buttons_biblehub_verse_grid } from "./html_buttons_biblehub_verse_grid.mjs";
import { html_buttons_biblehub_verse_group } from "./html_buttons_biblehub_verse_group.mjs";
export function app_g_verify_view_links_bar(
  container,
  small_gap,
  chapter_code,
  verse,
) {
  arguments_assert(arguments, 4);
  let links_bar = html_div(container);
  html_style_margin_top(links_bar, small_gap);
  html_centered(links_bar);
  let v = chapter_code.slice(3);
  let v2 = Number(v);
  let bh_chapter = String(v2);
  let book_code = chapter_code.slice(0, 3);
  let bh_book = g_verify_book_name(book_code);
  let verse_list = verse.split(",");
  html_button_bible_chapter_open(
    links_bar,
    chapter_code,
    verse,
    "Whole Chapter",
  );
  ("Commentary / Parallel / Interlinear each as a verse-group: one button for a single verse, or (multi-verse) a row of per-verse buttons in a shared centered grid so the verse numbers line up across the three kinds (a single button reaches only the first verse)");
  let multi_verse = greater_than_equal(verse_list.length, 2);
  let links_target = multi_verse
    ? html_buttons_biblehub_verse_grid(links_bar)
    : links_bar;
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Commentary",
    "",
    "#commentary",
  );
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Parallel",
    "",
    "",
  );
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Interlinear",
    "interlinear/",
    "",
  );
}
