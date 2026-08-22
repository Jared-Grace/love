import { list_filter_size } from "./list_filter_size.mjs";
import { add_1 } from "./add_1.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_node_types_operator } from "./js_node_types_operator.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { js_visit } from "./js_visit.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_line_shape(code) {
  arguments_assert(arguments, 1);
  ("How much working out one line asks of a learner: how many operators stand on it, and how deep the deepest of them sits inside the others. Nothing at all when the text is not a line of code.");
  ("The lessons at the front of the course hand out words rather than lines - For God so, TheWorld, God-so-loved - and several of those read in as code even so, because a hyphen between two words is a subtraction and the word in between two others is an operator JS knows. A line is counted here only when reading it in finds a written-out value on it: a number, a piece of text in quotes, a true or a false. That is what every lesson about solving a line has and no lesson about how names are spelled has.");
  ("Nothing is said about which operators they are. Two lines carrying the same count are the same size to a learner holding them in their head, and which two operators those are is a question the lesson itself answers.");
  let ast = js_parse_try(code);
  let unread = null_is(ast);
  if (unread) {
    return null;
  }
  let types = js_node_types_operator();
  let operators = 0;
  let depth = 0;
  let value_written = false;
  function on_visit(v) {
    "one piece of the line, counted if it is an operator and noted if it is a written-out value";
    let node = property_get(v, "node");
    let value_is = js_node_type_is(node, "Literal");
    if (value_is) {
      value_written = true;
    }
    let operator_is = js_node_types_is(node, types);
    if (not(operator_is)) {
      return;
    }
    operators = add_1(operators);
    ("how deep this operator sits is how many operators the walk is standing inside, itself included - the walk keeps everything it has come through, so the answer is already there to be counted rather than to be carried down by hand");
    let stack = property_get(v, "stack");
    function enclosing_is(above) {
      let above_is = js_node_types_is(above, types);
      return above_is;
    }
    let inside = list_filter_size(stack, enclosing_is);
    let deeper = greater_than(inside, depth);
    if (deeper) {
      depth = inside;
    }
  }
  js_visit(ast, on_visit);
  if (not(value_written)) {
    return null;
  }
  let shape = {
    operators,
    depth,
  };
  return shape;
}
