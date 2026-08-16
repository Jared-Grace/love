import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_search_results_book_verses_count } from "./app_search_results_book_verses_count.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_single } from "./list_single.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function app_search_results_book_card(
  book_code,
  book_current,
  book_group_div,
  books,
  results,
  result_verses_count,
  book_collapse_setters,
  book_chapter_single_expanders,
) {
  arguments_assert(arguments, 8);
  let same = equal(book_code, book_current.book_code);
  if (same) {
    return;
  }
  book_current.book_code = book_code;
  let chapter_expands = [];
  book_current.chapter_expands = chapter_expands;
  let div_group = book_group_div(book_code);
  let div_book = app_shared_container_blue(div_group);
  ("this is the third of four cards nested one inside the next, and the two outside it already trim to this one named amount; it used to write its own number a twentieth of a letter away from that, which no reader could have told apart and no line of the file explained");
  let book_padding = app_shared_spaced_tiny_gap();
  html_style_padding(div_book, book_padding);
  let value2 = app_shared_spaced_neighbor_gap();
  html_style_margin_y(div_book, value2);
  html_text_align_left(div_book);
  let book_name = ebible_book_code_to_name(books, book_code);
  let verses_count = app_search_results_book_verses_count(
    book_code,
    results,
    result_verses_count,
  );
  let verses_counted = word_count_pluralize(verses_count, "verse");
  ("the book's name is the thing being chosen between, so it is the only part in bold; how many verses it holds is there to weigh it by, and setting that in the same weight made every card read as two equally loud things");
  ("the count sits on its own line under the name rather than trailing it in brackets: shut cards stand side by side, so a name followed by its count made each card as wide as two things and fewer of them fit across a phone. stacked, a card is as wide as the longer of the two");
  let header = html_div(div_book);
  html_div_text_bold(header, book_name);
  let counted_div = html_div_text(header, verses_counted);
  app_shared_text_deemphasized(counted_div);
  html_cursor_pointer(header);
  let div_body = html_div_centered(div_book);
  book_current.body = div_body;
  ("whether this card is shut is kept on an object rather than under a name of its own, because one function writes it and another reads it: the setter below records it, and the click that flips the card reads it to know which way to flip. A name would give each of them its own copy the moment these two were pulled apart, and the card would then flip only on every other click.");
  let card = {
    collapsed: false,
  };
  function collapsed_set(value) {
    card.collapsed = value;
    if (card.collapsed) {
      html_display_none(div_body);
      html_display_inline_block(div_book);
      let value3 = app_shared_spaced_neighbor_gap();
      html_style_margin_x(div_book, value3);
      html_style_margin_bottom(header, "0");
    } else {
      html_display_block(div_body);
      html_display_block(div_book);
      html_style_margin_x(div_book, "0");
      html_style_margin_bottom(header, "0.3em");
    }
  }
  async function chapters_single_expand() {
    "a book holding one chapter offers no choice of chapter, so opening the book opens that chapter with it rather than asking for a second click that could only go one way";
    let one = list_size_1(chapter_expands);
    if (not(one)) {
      return;
    }
    let only = list_single(chapter_expands);
    await only();
  }
  async function toggle() {
    let next = not(card.collapsed);
    collapsed_set(next);
    let expanded = not(next);
    if (expanded) {
      ("the scrolling comes first because it costs no waiting: the reader sees the card land where they can read it while the verses inside it are still arriving");
      await html_scroll_center(div_book);
      await chapters_single_expand();
    }
  }
  html_on_click(header, toggle);
  collapsed_set(false);
  list_add(book_collapse_setters, collapsed_set);
  list_add(book_chapter_single_expanders, chapters_single_expand);
}
