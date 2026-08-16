import { arguments_assert } from "./arguments_assert.mjs";
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
export function app_search_results_book_card_header(
  div_book,
  books,
  book_code,
  results,
  result_verses_count,
) {
  arguments_assert(arguments, 5);
  let book_padding = app_shared_spaced_tiny_gap();
  html_style_padding(div_book, book_padding);
  let value = app_shared_spaced_neighbor_gap();
  html_style_margin_y(div_book, value);
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
  return header;
}
