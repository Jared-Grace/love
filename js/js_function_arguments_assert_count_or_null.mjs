import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_arguments_assert_number_node_or_null } from "./js_function_arguments_assert_number_node_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function js_function_arguments_assert_count_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("The number the line at the top of this body says the function takes, and nothing at all when the body has no such line.");
  ("Which piece of the file that number is written in is found next door, and only read here. Two copies of the finding would drift, and the drift would show as a check calling a function wrong that the repair beside it then leaves alone - the two would be looking at different lines.");
  ("Nothing here compares it to anything. What the number should be is the caller's question, and keeping the reading apart from the judgement is what lets one reader serve both the check and whatever repairs it.");
  let node = js_function_arguments_assert_number_node_or_null(declaration);
  let missing = null_is(node);
  if (missing) {
    return null;
  }
  let count = property_get(node, "value");
  return count;
}
