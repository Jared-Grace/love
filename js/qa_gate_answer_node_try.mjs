import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_answer_node_try(ast) {
  ("What a gate actually hands back, as the piece of code that makes it - with the name it was bound to and the waiting on it already stepped through. Nothing when there is no such piece to reach.");
  ("A gate almost never writes its answer where it returns it. It builds a record, gives it a name, and returns the name; and where the record is made by another gate it is awaited first. So every reader asking what a gate answers with has to walk the same three steps before it can ask its own question, and two of them now do.");
  ("Nothing comes back in four cases and they are one case to every caller: a gate that returns nowhere, one that returns without a value, one whose name is bound outside anything this can see, and one where the name is bound to nothing at all. Each of them means the same thing here - the answer cannot be read - so each of them is worth telling apart only to somebody looking at that gate, not to somebody sweeping every gate.");
  ("The name is looked up before the waiting is stepped through, and not the other way round, because a gate binding its record to a name is far and away the commoner shape and everything after that step reads a value rather than a word.");
  arguments_assert(arguments, 1);
  let returns = js_list_type_nodes(ast, "ReturnStatement");
  let silent_is = list_empty_is(returns);
  if (silent_is) {
    return null;
  }
  let statement = list_last(returns);
  let answer = js_return_argument_get(statement);
  let empty_is = equal(answer, null);
  if (empty_is) {
    return null;
  }
  let named = js_identifier_name_try(answer);
  let bound_is = null_not_is(named);
  if (bound_is) {
    answer = js_ast_declarator_init_named(ast, named);
    let unfound_is = equal(answer, null);
    if (unfound_is) {
      return null;
    }
  }
  let waited_is = js_node_type_is(answer, "AwaitExpression");
  if (waited_is) {
    answer = property_get(answer, "argument");
  }
  return answer;
}
