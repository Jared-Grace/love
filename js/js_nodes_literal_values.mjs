import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function js_nodes_literal_values(nodes) {
  "$plain nodes";
  "What a run of writing in a file actually says, out of the ones that plainly say anything - the pieces built out of other pieces are left out rather than guessed at.";
  "A SOURCE THAT IS NOT A PLAIN PIECE OF WRITING IS PASSED OVER RATHER THAN GUESSED AT. This is what both readers of a file's imports needed and each wrote out: an address built out of pieces names no one file and no one package, and the whole reason somebody built it that way is that nothing reading it could tell which. Setting it aside is the honest answer; a guess would name a file that may not be there.";
  "THE SETTING ASIDE AND THE READING ARE ONE STEP HERE ON PURPOSE. Kept apart they read as two ordinary list operations that happen to sit next to each other, and a reader adding a third kind of node has no reason to think the second one only ever sees the first one's survivors. Together they are a single question with a single answer.";
  arguments_assert(arguments, 1);
  function js_nodes_literal_values_plain_is(node) {
    let plain = js_node_type_is(node, "Literal");
    return plain;
  }
  let literals = list_filter(nodes, js_nodes_literal_values_plain_is);
  function js_nodes_literal_values_said(node) {
    let value = property_get(node, "value");
    return value;
  }
  let values = list_map(literals, js_nodes_literal_values_said);
  return values;
}
