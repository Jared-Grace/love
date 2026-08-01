import { arguments_assert } from "./arguments_assert.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_filter_property_path_not } from "./list_filter_property_path_not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
export async function functions_operators_raw() {
  "Every function still writing a comparison or a sum as an operator, where the pass that canonicalizes a file would write a call instead.";
  "These are the functions the fold has no way to see. Folding matches on the shape a body has after that pass, so a function the pass has never run over is compared against nothing and the places that write its body out by hand go unreported. One was found this way: asking whether a list is empty was spelled with a triple equals, ten files wrote out the same two steps, and the fold gate stayed green throughout - canonicalizing that one function alone turned up a site immediately.";
  "Not everything here is a mistake. A few drivers keep plain javascript on purpose, and the functions that stand for the operators cannot use themselves. The second of those is excluded by the same rule the pass uses; the first is a judgment, which is why this reports and changes nothing.";
  arguments_assert(arguments, 0);
  let records = await js_files_texts();
  let binary = js_operators_binary();
  let unary = js_operators_unary();
  let kinds = [
    {
      type: "BinaryExpression",
      operators: binary,
    },
    {
      type: "UnaryExpression",
      operators: unary,
    },
  ];
  let offenders = [];
  for (let record of records) {
    let text = property_get(record, "text");
    function parse() {
      let parsed = js_parse(text);
      return parsed;
    }
    let ast = catch_null(parse);
    let unparsable = null_is(ast);
    if (unparsable) {
      continue;
    }
    let name = js_flo_name(ast);
    let found = [];
    for (let kind of kinds) {
      let type = property_get(kind, "type");
      let operators = property_get(kind, "operators");
      ("a function standing for an operator is left alone, the same way the pass leaves it alone - it cannot be written in terms of itself");
      let usable = list_filter_property_path_not(
        operators,
        ["fn", "name"],
        name,
      );
      function lambda(node) {
        let node_operator = property_get(node, "operator");
        let matches = list_filter_property(usable, "operator", node_operator);
        let matched = list_empty_not_is(matches);
        if (matched) {
          list_add(found, node_operator);
        }
      }
      js_visit_type_node(ast, type, lambda);
    }
    let raw = list_empty_not_is(found);
    if (raw) {
      list_add(offenders, {
        name,
        operators: found,
        count: found.length,
      });
    }
  }
  function count_of(offender) {
    let count = property_get(offender, "count");
    return count;
  }
  list_sort_number_mapper_reverse(offenders, count_of);
  return offenders;
}
