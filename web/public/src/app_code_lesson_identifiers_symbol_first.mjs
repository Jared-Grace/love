import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { boolean_random } from "../../../love/public/src/boolean_random.mjs";
import { list_join_cycled } from "../../../love/public/src/list_join_cycled.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { list_random_index } from "../../../love/public/src/list_random_index.mjs";
import { text_multiply } from "../../../love/public/src/text_multiply.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_multiply } from "../../../love/public/src/list_multiply.mjs";
import { equal_2 } from "../../../love/public/src/equal_2.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
import { list_slices_size_cycles_shuffled } from "../../../love/public/src/list_slices_size_cycles_shuffled.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { app_code_lesson_identifiers_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_identifiers_underscores_define_symbol.mjs";
import { word_plural } from "../../../love/public/src/word_plural.mjs";
import { html_cycle_code } from "../../../love/public/src/html_cycle_code.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_to_text_and_list } from "../../../love/public/src/list_to_text_and_list.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
export function app_code_lesson_identifiers_symbol_first() {
  const separator_valid = "$";
  let separator_valid_name = "dollar sign";
  const separator_invalid = ".";
  let separator_invalid_name = "period";
  function above(root) {
    let c2 = app_code_container_light_blue(root);
    const identifier_symbols_types = ["letter", "underscore", "dollar sign"];
    let identifier_symbols_types_plural = list_map(
      identifier_symbols_types,
      word_plural,
    );
    html_div_text(
      c2,
      "Remember, identifiers can have different kinds of symbols including " +
        list_to_text_and_list(identifier_symbols_types_plural),
    );
    let div = html_div(c2);
    html_cycle_code(div, [
      "Identifiers can also have " + word_plural("numbers") + " ",
      separator_valid,
    ]);
    html_div_text_multiple(c2, [
      "However identifiers cannot have a number as their first symbol (Identifiers cannot begin with a number)",
      "After the first symbol an identifier can always be a number",
    ]);
    function define_valid() {
      app_code_lesson_identifiers_underscores_define_symbol(
        c,
        separator_valid_name,
        separator_valid,
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
      let multiplied = list_multiply(separators, 3);
      log(app_code_lesson_identifiers_symbol_first.name, {
        multiplied,
      });
      function lambda(value) {
        let multiplied2 = text_multiply(value, 2);
        return multiplied2;
      }
      let multiplied_index = list_random_index(multiplied);
      property_transform(multiplied, multiplied_index, lambda);
      let joined = list_join_cycled(batch_item, multiplied);
      let r2 = boolean_random();
      if (r2) {
        let right = list_random_item(multiplied);
        joined = text_combine(joined, right);
      }
      return joined;
    }
    let mapped3 = list_map_index(list, lambda2);
    return mapped3;
  }
  let name = list_join_empty(["Identifiers (first symbol)"]);
  let id = list_join_empty(["identifiers_symbol_first"]);
  let r = app_code_lesson_symbols_identifiers_valid(
    name,
    id,
    above,
    noop,
    batch_get,
  );
  return r;
}
