import { list_multiply_3_random_doubled } from "../../../love/public/src/list_multiply_3_random_doubled.mjs";
import { word_plural } from "../../../love/public/src/word_plural.mjs";
import { list_swap_beginning } from "../../../love/public/src/list_swap_beginning.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_to_text_and_list } from "../../../love/public/src/list_to_text_and_list.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { boolean_random } from "../../../love/public/src/boolean_random.mjs";
import { list_join_cycled } from "../../../love/public/src/list_join_cycled.mjs";
import { equal_2 } from "../../../love/public/src/equal_2.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
import { list_slices_size_cycles_shuffled } from "../../../love/public/src/list_slices_size_cycles_shuffled.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_cycle_code } from "../../../love/public/src/html_cycle_code.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_lesson_identifiers_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_identifiers_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_identifiers_underscores_generic(
  separator_invalid_name,
  separator_invalid,
  separator_valid_name,
  separator_valid,
  defines_after,
  identifier_symbols_types_adds,
  defines_invert,
) {
  function above(root) {
    let c = app_code_container_light_blue(root);
    let defines = [define_valid, define_invalid];
    if (defines_invert) {
      list_swap_beginning(defines);
    }
    invoke_multiple(defines);
    defines_after(root);
    let c2 = app_code_container_light_blue(root);
    const identifier_symbols_types = ["letters"];
    list_add_multiple(identifier_symbols_types, identifier_symbols_types_adds);
    html_div_text(
      c2,
      "Remember, identifiers can have different kinds of symbols including " +
        list_to_text_and_list(identifier_symbols_types),
    );
    let div = html_div(c2);
    html_cycle_code(div, [
      "Identifiers can also have " + word_plural(separator_valid_name) + " ",
      separator_valid,
    ]);
    let div2 = html_div(c2);
    html_cycle_code(div2, [
      "However identifiers cannot have " +
        word_plural(separator_invalid_name) +
        " ",
      separator_invalid,
    ]);
    function define_valid() {
      app_code_lesson_identifiers_underscores_define_symbol(
        c,
        separator_valid_name,
        separator_valid,
      );
    }
    function define_invalid() {
      app_code_lesson_identifiers_underscores_define_symbol(
        c,
        separator_invalid_name,
        separator_invalid,
      );
    }
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list = list_slices_size_cycles_shuffled(mapped, 2, 4);
    let separators_invalid_next = list_cycler([
      [separator_invalid],
      [separator_valid, separator_invalid],
      [separator_invalid, separator_valid],
    ]);
    function lambda2(batch_item, batch_item_index) {
      let separators = null;
      let valid = integer_even_is(batch_item_index);
      if (valid) {
        separators = [separator_valid];
      } else {
        let size = list_size(batch_item);
        let eq2 = equal_2(size);
        if (eq2) {
          separators = [separator_invalid];
        } else {
          separators = separators_invalid_next();
        }
      }
      let multiplied = list_multiply_3_random_doubled(separators);
      let joined = list_join_cycled(batch_item, multiplied);
      let r = boolean_random();
      if (r) {
        let right = list_random_item(multiplied);
        joined = text_combine(joined, right);
      }
      return joined;
    }
    let mapped3 = list_map_index(list, lambda2);
    return mapped3;
  }
  let name = list_join_empty([
    "Identifiers (",
    separator_valid_name,
    "s allowed, ",
    separator_invalid_name,
    "s not)",
  ]);
  let p = word_plural(separator_valid_name);
  let id = list_join_empty(["identifiers_", p]);
  let r5 = app_code_lesson_symbols_identifiers_valid(
    name,
    id,
    above,
    noop,
    batch_get,
    app_code_symbol,
  );
  return r5;
}
