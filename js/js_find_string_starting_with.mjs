import { js_strings_generic } from "./js_strings_generic.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_find } from "./list_find.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
export function js_find_string_starting_with(ast, prefix) {
  "The line a written sentence sits on, found by how that sentence begins. This";
  "repo comments in bare strings because a normalizing pass writes the tree back";
  "out and a comment lives nowhere in a tree — so the prose is real nodes, and";
  "real nodes have addresses.";
  "That makes the prose usable as a bookmark: a sentence somebody wrote to";
  "explain a passage also marks where the passage starts, and it says what it";
  "means in a way a number never will.";
  let results = js_strings_generic(ast);
  function starting_is(result) {
    let value = property_get(result, "value");
    let starts_is = text_starts_with(value, prefix);
    return starts_is;
  }
  let only = list_find(results, starting_is);
  let node = property_get(only, "node");
  let item = js_node_to_block_item(ast, node);
  return item;
}
