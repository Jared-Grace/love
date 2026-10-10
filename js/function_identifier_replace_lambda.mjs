import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { js_shorthand_properties_expand } from "./js_shorthand_properties_expand.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { each } from "./each.mjs";
export function function_identifier_replace_lambda(
  identifier_name,
  replacement,
) {
  "Only the mentions that read or bind a value are replaced. The word right of a dot, or a key written in an object, names a property of something else: replacing every identifier spelled the same way turned a set's held.add into held.adder, which throws on the first call.";
  function lambda2(ast) {
    let identifiers_named = js_identifiers_referenced_named_nodes(
      ast,
      identifier_name,
    );
    let b = list_empty_is(identifiers_named);
    not_assert_json(b, {
      hint: "at least one identifier with this name should exist to replace — was the name not found?",
      identifier_name,
    });
    js_shorthand_properties_expand(ast, identifier_name);
    let from = js_parse_expression(replacement);
    function lambda(i) {
      let v = object_replace(i, from);
      return v;
    }
    each(identifiers_named, lambda);
  }
  return lambda2;
}
