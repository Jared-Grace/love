import { app_code_lesson_identifiers_underscores_generic_batch_get } from "./app_code_lesson_identifiers_underscores_generic_batch_get.mjs";
import { app_code_symbols_separated_on_question } from "./app_code_symbols_separated_on_question.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { word_plural } from "./word_plural.mjs";
import { list_swap_beginning } from "./list_swap_beginning.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_to_text_and_list } from "./list_to_text_and_list.mjs";
import { app_code_lesson_identifiers_valid } from "./app_code_lesson_identifiers_valid.mjs";
import { app_code_lesson_name_id_symbol } from "./app_code_lesson_name_id_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
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
    let right = list_to_text_and_list(identifier_symbols_types);
    let text = text_combine(
      "Remember, identifiers can have different kinds of symbols including ",
      right,
    );
    html_div_text(c2, text);
    let p = word_plural(separator_valid_name);
    let combined = text_combine_multiple([
      "Identifiers can also have ",
      p,
      " ",
    ]);
    html_div_cycle_code(c2, [combined, separator_valid]);
    let p2 = word_plural(separator_invalid_name);
    let combined2 = text_combine_multiple([
      "However identifiers cannot have ",
      p2,
      " ",
    ]);
    html_div_cycle_code(c2, [combined2, separator_invalid]);
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
    let r = app_code_lesson_identifiers_underscores_generic_batch_get(
      separator_invalid,
      separator_valid,
    );
    return r;
  }
  let combined3 = text_combine(separator_valid_name, "s allowed");
  let combined4 = text_combine(separator_invalid_name, "s not");
  let name_id = app_code_lesson_name_id_symbol(
    "identifiers",
    [combined3, combined4],
    separator_valid,
  );
  let r5 = app_code_lesson_identifiers_valid(
    name_id,
    above,
    batch_get,
    app_code_symbols_separated_on_question,
  );
  return r5;
}
