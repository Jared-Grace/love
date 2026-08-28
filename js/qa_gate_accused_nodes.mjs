import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_accused_nodes(f_name) {
  "Every part of one gate's body that lands in the list of offenders it throws, handed back as the nodes themselves so what sits inside them can be told apart from what does not. Read-only.";
  "The record-shaped throw has two slots and they mean opposite things. The list is the accusation - the names in it are the ones at fault, and a reader scraping the failure is meant to find them and hold their apps back. The hint beside it is where a bystander goes, and it is dropped before the names are read.";
  "So a name spelled into the list is not a leak; it is the channel working. The gate that looks for leaks says as much in the words it fails with - throw the offenders, put the advice and any bystanders under the hint - and the list is the half of that sentence nothing was reading.";
  "Only the one throw counts, because it is the only one whose first slot is a list of names. The others are handed a fact and a record, and a name in one of those is a name in a record, which is the shape the hint side already covers.";
  let thrown = list_empty_is_assert_json.name;
  let nodes = [];
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = js_identifier_name_try(callee);
    if (not_equal(called, thrown)) {
      continue;
    }
    let call_arguments = property_get(call, "arguments");
    let none = list_empty_is(call_arguments);
    if (none) {
      continue;
    }
    let accused = list_get(call_arguments, 0);
    list_add(nodes, accused);
  }
  return nodes;
}
