import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_find_name_generic } from "./js_statement_find_name_generic.mjs";
import { js_statement_pick_holder } from "./js_statement_pick_holder.mjs";
export function js_statement_find_name_holder(ast, name) {
  arguments_assert(arguments, 2);
  ("The line at the top level of whichever function a name was first written inside - the closest one, not the outermost.");
  ("The third way of addressing a line, and the one the other two leave out. Its two neighbours take the line the word is written on, however deep, and the line at the top of the outermost body. Neither can point at a branch or a loop standing inside a function written inside another one: the nearest reader goes past it to a line of its contents, and the outermost reader climbs clean out of the inner function and comes back holding the whole of it.");
  ("That shape is not rare. A screen here is one function holding a paint step written inside it, and the paint step is where the size is - measured on 2026-08-17 a screen of two hundred and twenty two carried one hundred and forty of it inside a single nested step. Every branch and every loop in that step could be addressed by neither reader, so the only cuts available were the ones that happened to fall on a plain line.");
  ("The first mention, which is what a span's opening end wants: the line a name is introduced on. Its neighbour takes the same word's latest mention, which is what a span's closing end wants, because a run of paint almost always ends by spending something it opened with.");
  function pick(stack) {
    let statement = js_statement_pick_holder(stack);
    return statement;
  }
  let found = js_statement_find_name_generic(ast, name, pick);
  return found;
}
