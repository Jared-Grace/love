import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_combine } from "../../../love/public/src/list_map_combine.mjs";
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
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
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
) {
  function above(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_identifiers_underscores_define_symbol(
      c,
      separator_invalid_name,
      separator_invalid,
    );
    app_code_lesson_identifiers_underscores_define_symbol(
      c,
      separator_valid_name,
      separator_valid,
    );
    defines_after(root);
    let c2 = app_code_container_light_blue(root);
    const identifier_symbols_types = ["letter"];
    list_add_multiple(identifier_symbols_types, identifier_symbols_types_adds);
    let combineds = list_map_combine(identifier_symbols_types, " symbols");
    html_div_text(
      c2,
      "Remember, identifiers can have different kinds of symbols including " +
        list_to_text_and_list(combineds),
    );
    let div = html_div(c2);
    html_cycle_code(div, [
      "Identifiers can also have" +
        text_articled_pad_space(separator_valid_name),
      separator_valid,
    ]);
    let div2 = html_div(c2);
    html_cycle_code(div2, [
      "However identifiers cannot have" +
        text_articled_pad_space(separator_invalid_name),
      separator_invalid,
    ]);
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
    function lambda2(item, index) {
      let separators = null;
      let valid = integer_even_is(index);
      if (valid) {
        separators = [separator_valid];
      } else {
        let size = list_size(item);
        let eq2 = equal_2(size);
        if (eq2) {
          separators = [separator_invalid];
        } else {
          separators = separators_invalid_next();
        }
      }
      let joined = list_join_cycled(item, separators);
      let r = boolean_random();
      if (r) {
        let right = list_random_item(separators);
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
  let id = list_join_empty(["identifiers_", separator_valid_name, "s"]);
  let r5 = app_code_lesson_symbols_identifiers_valid(
    name,
    id,
    above,
    noop,
    batch_get,
  );
  return r5;
}
