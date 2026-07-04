import { app_code_lesson_identifiers_symbol_first_generic } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first_generic.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
export function app_code_lesson_identifiers_symbol_first() {
  let symbol_create = app_code_symbol;
  let name = "Identifiers (first symbol)";
  let id = "identifiers_symbol_first";
  function above(root) {
    const identifier_symbols_types = [
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
    const identifiers_valid_anywhere = list_to_text_and_list(
      identifier_symbols_types_plural,
    );
    let c2 = app_code_container_light_blue(root);
    html_div_text(
      c2,
      "Remember, identifiers can have different kinds of symbols including " +
        identifiers_valid_anywhere,
    );
    let ds = digits();
    let combined = list_between_space(ds);
    let div = html_div(c2);
    let parts = list_concat_single(
      "Identifiers can also have " + word_plural("digit") + ": ",
      combined,
    );
    html_cycle_code(div, parts);
    let c = app_code_container_light_blue(root);
    html_div_text_multiple(c, [
      "However identifiers cannot have a digit as their first symbol (Identifiers cannot begin with a digit)",
      "After the first symbol an identifier can always be a digit",
    ]);
    function lambda3(t) {
      let plural = property_get(t, "plural");
      let examples2 = property_get(t, "examples");
      let combined2 = text_combine_space_right(plural);
      let concated2 = list_concat_single(combined2, examples2);
      return concated2;
    }
    let mapped2 = list_map(identifier_symbols_types, lambda3);
    let concated = list_to_or_list_generic(mapped2, "and");
    let div2 = html_div(c);
    html_span_text(div2, "And ");
    function lambda4(item) {
      let l = list_is(item);
      let result = ternary(l, html_cycle_code, html_span_text_padded_space);
      result(div2, item);
    }
    each(concated, lambda4);
    html_span_text(
      div2,
      " may be used anywhere in an identifier, even as the first symbol",
    );
  }
  let r = app_code_lesson_identifiers_symbol_first_generic(
    symbol_create,
    name,
    id,
  );
  return r;
}
