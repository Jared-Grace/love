export function js_nodes_token_any_is(nodes, token) {
  "$plain token";
  "Whether any one of a run of pieces of parsed code is a bare name or bare value written exactly as the given word.";
  "A HOLE IS PASSED OVER RATHER THAN ASKED ABOUT. A list written out in code may leave a place empty, and the parsed form puts nothing at all in that place; handing nothing to the question underneath would end the reading over a shape that is simply not the word being looked for.";
  arguments_assert(arguments, 2);
  for (let node of nodes) {
    let missing = null_is(node);
    if (missing) {
      continue;
    }
    let same = js_node_token_is(node, token);
    if (same) {
      return true;
    }
  }
  return false;
}
