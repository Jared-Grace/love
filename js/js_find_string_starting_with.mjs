import { list_find_item_property } from "./list_find_item_property.mjs";
import { property_starts_with } from "./property_starts_with.mjs";
import { js_strings_generic } from "./js_strings_generic.mjs";
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
    let starts_is = property_starts_with(result, "value", prefix);
    return starts_is;
  }
  let node = list_find_item_property(results, starting_is, "node");
  let item = js_node_to_block_item(ast, node);
  return item;
}
