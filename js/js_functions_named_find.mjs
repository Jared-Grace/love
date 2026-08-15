import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
import { list_size } from "./list_size.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { equal } from "./equal.mjs";
export function js_functions_named_find(functions, name) {
  arguments_assert(arguments, 2);
  ("The one of these functions written under the name you give.");
  ("Handed the functions rather than the file, so that whoever asks decides which functions were worth asking about. Two callers ask this - one that can only move a function standing on a line of its own, and one that can move a function written anywhere - and they differ in nothing but the list they hand in.");
  ("Exactly one, so a word that two of them answer to stops here rather than quietly picking whichever was written first. Names handed out to nameless functions are only kept apart within the file as it stood when each was handed out, so the same short word really does turn up twice, and a move made against the wrong one of two is a move nothing would report.");
  function lambda(declaration) {
    let named = js_function_declaration_name(declaration);
    let matched = equal(named, name);
    return matched;
  }
  let found = list_filter(functions, lambda);
  let count = list_size(found);
  equal_assert_json(count, 1, {
    hint: "one function written inside this one has to answer to that word - either none does, or more than one does and there is no way to say which was meant. Would you like to check the spelling, or give the one you mean a name of its own first?",
    name,
    count,
  });
  let one = list_single(found);
  return one;
}
