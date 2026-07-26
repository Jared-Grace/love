import { js_visit_types } from "./js_visit_types.mjs";
import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { not } from "./not.mjs";
export function js_identifiers_naming_nodes(ast) {
  "the Identifier nodes that NAME something rather than reference a value — the log in console.log, the key in { log: 1 }";
  "a name in these positions is text, not a variable, so it must never count as using an import: that is what made console.log(x) pull in an unused import of this repo's own log";
  function lambda2(la) {
    function lambda(node) {
      let meta_is = js_node_type_is(node, "MetaProperty");
      if (meta_is) {
        ("the two halves of the module's own url are spelled like a variable and a property but neither is one - the pair is a single word the language supplies");
        let meta = property_get(node, "meta");
        let named_meta = property_get(node, "property");
        la(meta);
        la(named_meta);
        return;
      }
      let computed = property_get(node, "computed");
      if (computed) {
        ("a[b] really does reference b");
        return;
      }
      let member = js_node_type_is(node, "MemberExpression");
      let pair_is = js_node_type_is(node, "Property");
      if (pair_is) {
        ("only a key-and-value pair inside an object can be written the short way, so only it carries the flag - asking a method for it errors");
        let shorthand = property_get(node, "shorthand");
        if (shorthand) {
          ("{ log } really does reference log");
          return;
        }
      }
      let named = null;
      if (member) {
        named = property_get(node, "property");
      }
      if (not(member)) {
        named = property_get(node, "key");
      }
      let identifier = js_node_type_is(named, "Identifier");
      if (identifier) {
        la(named);
      }
    }
    let lambda_node = js_visit_nodes_lambda(lambda);
    let types = [
      "MemberExpression",
      "Property",
      "MethodDefinition",
      "PropertyDefinition",
      "MetaProperty",
    ];
    ("a method's name and a field's name sit in the same position as a key in an object and are just as much text rather than a variable");
    js_visit_types(ast, types, lambda_node);
  }
  let naming = list_adder_unique(lambda2);
  return naming;
}
