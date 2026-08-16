import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_border_radius_extra_large } from "./app_shared_border_radius_extra_large.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { app_search_results_verse_button } from "./app_search_results_verse_button.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_map } from "./list_map.mjs";
import { app_search_results_buttons_expand } from "./app_search_results_buttons_expand.mjs";
import { list_add } from "./list_add.mjs";
export function app_search_results_chapter_card(
  vk,
  book_card_add,
  book_current,
  books,
  languages_chosen,
) {
  arguments_assert(arguments, 5);
  let verse_numbers = property_get(vk, "value");
  let chapter_code = property_get(vk, "key");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  book_card_add(book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let div_chapter = html_div(book_current.body);
  html_display_inline_block(div_chapter);
  let color_background = app_shared_container_blue_medium_background_color();
  html_style_background_color_set(div_chapter, color_background);
  let border_color = app_shared_color_blue_pale();
  let border_width = app_shared_spaced_frame_gap();
  html_border(div_chapter, border_width, border_color);
  let border_radius = app_shared_border_radius_extra_large();
  html_border_radius(div_chapter, border_radius);
  ("the innermost of the four cards, spending the same named amount as the three around it, so the verse text at the bottom is not standing behind four different numbers nobody chose together");
  let chapter_padding = app_shared_spaced_tiny_gap();
  html_style_padding(div_chapter, chapter_padding);
  let value = app_shared_spaced_neighbor_gap();
  html_style_margin_x(div_chapter, value);
  let value5 = app_shared_spaced_frame_gap();
  html_style_margin_y(div_chapter, value5);
  html_text_align_left(div_chapter);
  let chapter_header_text = text_combine_multiple([
    "Chapter ",
    chapter_name,
    ":",
  ]);
  let chapter_header = html_div_text_bold(div_chapter, chapter_header_text);
  html_style_margin_bottom(chapter_header, "0.3em");
  function each_verse_number(verse_number) {
    let r = app_search_results_verse_button(
      verse_number,
      div_chapter,
      chapter_code,
      books,
      languages_chosen,
    );
    return r;
  }
  list_sort_number_mapper(verse_numbers, integer_to_try);
  let bs = list_map(verse_numbers, each_verse_number);
  async function chapter_expand() {
    "everything this chapter matched, opened together";
    await app_search_results_buttons_expand(bs);
  }
  list_add(book_current.chapter_expands, chapter_expand);
  return bs;
}
