import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_selects_call_binding_drop(ast, selects) {
  "Takes the name off a call whose answer nobody reads, leaving the call doing what it does and binding nothing.";
  "IT IS THE OTHER HALF OF WRITING A CALL IN. A call written in beside a chosen line is written with a name in front of it whenever the function called hands something back, because the writing cannot know whether the answer is wanted. Half the time it is not - the call was written in for what it does to the page - and a name nothing ever reads is the one thing a gate here refuses.";
  "IT REFUSES ANYTHING BUT A NAMED CALL STANDING ALONE AS A LINE. A call sitting inside a longer line is part of that line's answer, and replacing the line with the call alone would throw away everything built on top of it - which reads as a success, because a line did get shorter.";
  arguments_assert(arguments, 2);
  let node = list_single(selects);
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  let statement_before = body[index];
  let type_before = property_get(statement_before, "type");
  let named_is = equal(type_before, "VariableDeclaration");
  if (not(named_is)) {
    error_json({
      hint: "this drops the name off a call that stands alone as its own line - the line chosen here is something else, so taking it apart would lose whatever else it says",
      type: type_before,
    });
  }
  let statement = {
    type: "ExpressionStatement",
    expression: node,
  };
  list_remove_at(body, index);
  list_insert(body, index, statement);
}
