import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working } from "./js_function_declaration_statements_working.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_function_statements_before_leaving(declaration) {
  arguments_assert(arguments, 1);
  ("The work a function does before the line that ends it - nothing at all when the body was switched off at the top.");
  ("This is the measure that tells a leftover apart from a suspension, and the two look identical from below. Both are a return with work written under it. What separates them is what stands above: a suspension has nothing above it, because somebody switched the whole body off and left the work in place to be switched back on; a leftover has the real body above it, and the lines below are what the body used to do before it was rewritten.");
  ("Asked of the work alone, so the prose a body opens with and the count of its own arguments do not read as a body. Those stand above a suspension as readily as above a leftover, and a reading that counted them would call every suspension a leftover.");
  ("Nothing here judges which one it is. It hands back what stands above and lets a caller draw the line, because the line is the thing worth arguing about and it should be argued about in one place rather than inside a reading.");
  let working = js_function_declaration_statements_working(declaration);
  let before = [];
  for (let statement of working) {
    let returns = js_node_type_is(statement, "ReturnStatement");
    let throws = js_node_type_is(statement, "ThrowStatement");
    if (returns || throws) {
      return before;
    }
    list_add(before, statement);
  }
  return before;
}
