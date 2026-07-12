import { app_code_symbols_separated_on_question } from "./app_code_symbols_separated_on_question.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_multiply_3_random_doubled } from "./list_multiply_3_random_doubled.mjs";
import { word_plural } from "./word_plural.mjs";
import { list_swap_beginning } from "./list_swap_beginning.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_to_text_and_list } from "./list_to_text_and_list.mjs";
import { app_code_lesson_identifiers_valid } from "./app_code_lesson_identifiers_valid.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { list_join_cycled } from "./list_join_cycled.mjs";
import { equal_2 } from "./equal_2.mjs";
import { list_size } from "./list_size.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { list_cycler } from "./list_cycler.mjs";
import { list_slices_size_cycles_shuffled } from "./list_slices_size_cycles_shuffled.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_lesson_underscores_define_symbol } from "./app_code_lesson_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
    let identifier_symbols_types = ["letters"];
    list_add_multiple(identifier_symbols_types, identifier_symbols_types_adds);
    html_div_text(
      c2,
      text_combine(
        "Remember, identifiers can have different kinds of symbols including ",
        list_to_text_and_list(identifier_symbols_types),
      ),
    );
    html_div_cycle_code(c2, [
      text_combine_multiple([
        "Identifiers can also have ",
        word_plural(separator_valid_name),
        " ",
      ]),
      separator_valid,
    ]);
    html_div_cycle_code(c2, [
      text_combine_multiple([
        "However identifiers cannot have ",
        word_plural(separator_invalid_name),
        " ",
      ]),
      separator_invalid,
    ]);
    function define_valid() {
      app_code_lesson_underscores_define_symbol(
        c,
        separator_valid_name,
        separator_valid,
      );
    }
    function define_invalid() {
      app_code_lesson_underscores_define_symbol(
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
    function lambda(batch_item, batch_item_index) {
      let separators = null;
      let valid = integer_even_is(batch_item_index);
      if (valid) {
        separators = [separator_valid];
      } else {
        let size = list_size(batch_item);
        let eq = equal_2(size);
        if (eq) {
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
    let mapped3 = list_map_index(list, lambda);
    return mapped3;
  }
  let name_id = app_code_lesson_name_id("identifiers", [
    text_combine(separator_valid_name, "s allowed"),
    text_combine(separator_invalid_name, "s not"),
  ]);
  let r5 = app_code_lesson_identifiers_valid(
    name_id,
    above,
    batch_get,
    app_code_symbols_separated_on_question,
  );
  return r5;
}
