import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function js_selects_call_remove(ast, selects) {
  "Takes the chosen line out of the block it sits in, leaving everything above and below it where it was.";
  "It is the missing half of the pair next door. Adding a line beside a chosen one was already a command, and taking one away was not - so every removal was a hand edit, which is the one thing a named change is meant to replace, and it left no unit anybody could reach for the next time.";
  "IT TAKES THE WHOLE LINE, not the call inside it. A call standing alone as a line is there for what it does rather than for what it answers, so what is left behind once it goes is nothing at all - whereas a call whose answer is read is part of a longer line, and taking it out would leave that line half written.";
  "THE CHOOSING IS SOMEBODY ELSE'S. It is handed the place already found, so the same removal works off any selector at all - one call of a name, the third call of a name, a call inside a particular branch - and none of that has to be spelled again here.";
  arguments_assert(arguments, 2);
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  list_remove_at(body, index);
}
