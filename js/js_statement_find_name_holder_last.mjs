import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_find_name_last_generic } from "./js_statement_find_name_last_generic.mjs";
import { js_statement_pick_holder } from "./js_statement_pick_holder.mjs";
export function js_statement_find_name_holder_last(ast, name) {
  arguments_assert(arguments, 2);
  ("The line at the top level of whichever function a name was last written inside - the closest function, and the latest mention.");
  ("The closing end of a span cut out of a nested step, and the twin of the reader that takes the first mention. Both take the line at the top of the closest function, because that is the only address that can point at a branch or a loop standing inside a paint step written inside a screen.");
  ("The latest mention rather than the earliest is what a closing end wants. A run of paint opens by naming something and closes by spending it, so its last line introduces nothing - every word on it was first written further up, and an address by earliest mention would stop the cut short and leave the lines behind reaching for a name that has moved away.");
  function pick(stack) {
    let statement = js_statement_pick_holder(stack);
    return statement;
  }
  let found = js_statement_find_name_last_generic(ast, name, pick);
  return found;
}
