import { app_code_symbols_separated_on_question } from "./app_code_symbols_separated_on_question.mjs";
import { list_to_and_list } from "./list_to_and_list.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_span_text_padded_space } from "./html_span_text_padded_space.mjs";
import { ternary } from "./ternary.mjs";
import { list_is } from "./list_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_space_right } from "./text_combine_space_right.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { html_div } from "./html_div.mjs";
import { list_between_space } from "./list_between_space.mjs";
import { digits } from "./digits.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { list_to_text_and_list } from "./list_to_text_and_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { each } from "./each.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { word_plural } from "./word_plural.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_identifiers_symbol_first_generic } from "./app_code_lesson_identifiers_symbol_first_generic.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_identifiers_symbol_first() {
  let name_id = app_code_lesson_name_id("identifiers", ["symbol", "first"]);
  let r = app_code_lesson_identifiers_symbol_first_generic(
    name_id,
    above,
    app_code_symbols_separated_on_question,
  );
  function above(root) {
    let identifier_symbols_types = [
      {
        name: "letter",
        examples: ["a", " - ", "z", " ", "A", " - ", "Z"],
      },
      {
        name: "underscore",
        examples: ["_"],
      },
      {
        name: "dollar sign",
        examples: ["$"],
      },
    ];
    function lambda(t) {
      let before = property_get(t, "name");
      let p = word_plural(before);
      property_set_exists_not(t, "plural", p);
    }
    each(identifier_symbols_types, lambda);
    let identifier_symbols_types_plural = list_map_property(
      identifier_symbols_types,
      "plural",
    );
    let identifiers_valid_anywhere = list_to_text_and_list(
      identifier_symbols_types_plural,
    );
    let c2 = app_code_container_light_blue(root);
    html_div_text(
      c2,
      text_combine(
        "Remember, identifiers can have different kinds of symbols including ",
        identifiers_valid_anywhere,
      ),
    );
    let ds = digits();
    let combined = list_between_space(ds);
    let parts = list_concat_single(
      text_combine_multiple([
        "Identifiers can also have ",
        word_plural("digit"),
        ": ",
      ]),
      combined,
    );
    html_div_cycle_code(c2, parts);
    let c = app_code_container_light_blue(root);
    html_div_text_multiple(c, [
      "However identifiers cannot have a digit as their first symbol (Identifiers cannot begin with a digit)",
      "After the first symbol an identifier can always be a digit",
    ]);
    function lambda3(t) {
      let plural = property_get(t, "plural");
      let examples = property_get(t, "examples");
      let combined2 = text_combine_space_right(plural);
      let concated2 = list_concat_single(combined2, examples);
      return concated2;
    }
    let mapped = list_map(identifier_symbols_types, lambda3);
    let concated = list_to_and_list(mapped);
    let div = html_div(c);
    html_span_text(div, "And ");
    function lambda4(item) {
      let l = list_is(item);
      let result = ternary(l, html_cycle_code, html_span_text_padded_space);
      result(div, item);
    }
    each(concated, lambda4);
    html_span_text(
      div,
      " may be used anywhere in an identifier, even as the first symbol",
    );
  }
  return r;
}
