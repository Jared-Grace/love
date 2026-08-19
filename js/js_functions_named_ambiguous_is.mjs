import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_functions_named_all } from "./js_functions_named_all.mjs";
import { list_size } from "./list_size.mjs";
export function js_functions_named_ambiguous_is(functions, name) {
  arguments_assert(arguments, 2);
  ("Whether the word names more than one - or none - of these functions, so that asking for the one written under it has no answer.");
  ("A name handed out to a nameless function is only kept apart from its neighbours within the file as it stood when it was handed out, so the same short word really does turn up three times in one function. The finder stops on that, which is right for the finder and wrong for a walk: a word two functions answer to is a shape to step over, not a reason to put down everything still on the list.");
  ("So this is asked before the move rather than found by making it. It reads the same list the finder will read, which is what keeps a report of what could be moved from promising a move that then refuses.");
  let found = js_functions_named_all(functions, name);
  let count = list_size(found);
  let ambiguous_is = equal_not(count, 1);
  return ambiguous_is;
}
