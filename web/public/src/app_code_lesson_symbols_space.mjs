import { app_code_container_light_blue_border_color } from "../../../love/public/src/app_code_container_light_blue_border_color.mjs";
import { app_replace_button_symbol_style_box_shadow_value_width } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_width.mjs";
import { html_box_shadow_set } from "../../../love/public/src/html_box_shadow_set.mjs";
import { html_style_code_generic_unshadowed } from "../../../love/public/src/html_style_code_generic_unshadowed.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_join_space_nb } from "../../../love/public/src/list_join_space_nb.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slices_size_random } from "../../../love/public/src/list_slices_size_random.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
export function app_code_lesson_symbols_space() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let nb = text_space_nb();
    html_cycle(
      div,
      [
        noop,
        function lambda2(component) {
          const color_background = "white";
          const color_font = "transparent";
          let color_box_shadow = app_code_container_light_blue_border_color();
          html_style_code_generic_unshadowed(
            component,
            color_background,
            color_font,
          );
          const width = "0.03";
          let style_value =
            app_replace_button_symbol_style_box_shadow_value_width(
              color_box_shadow,
              width,
            );
          html_box_shadow_set(component, style_value);
        },
      ],
      [
        "In English, when writing, we use ",
        nb,
        " spaces ",
        nb,
        " to separate words",
      ],
    );
    html_div_text(
      c,
      "For a computer, a space is considered a symbol, just like a letter or a number",
    );
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list2 = list_slices_size_random(mapped, 2, 3);
    let mapped2 = list_map(list2, list_join_space_nb);
    return mapped2;
  }
  function lambda4(parent, index_1, symbols) {
    let r = mod(index_1, 5);
    let eq = equal_0(r);
    if (eq) {
      let size = list_size(symbols);
      let ne = equal_not(index_1, size);
      if (ne) {
        app_code_lesson_symbols_digits_numbered_on_symbol(parent, index_1);
      }
    }
  }
  let r5 = app_code_lesson_symbols_counting(
    "Symbols (Space)",
    "symbols_space",
    lambda,
    lambda4,
    batch_get,
  );
  return r5;
}
