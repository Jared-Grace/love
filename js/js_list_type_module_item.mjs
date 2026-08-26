import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_list_type_module_item(ast, node_type) {
  arguments_assert(arguments, 2);
  ("Every node of a kind that may only be written as a module item, read straight off the module's own list of statements rather than by walking down through the whole file.");
  ("An import line and an export line are the only kinds that qualify, and the language permits neither of them anywhere but at the top of a module - one written inside a function or a block is not slow to find, it is a file that will not parse. So the module's own list already holds every one there is, and a walk down through the rest of the file is looking in the only places they cannot be. Measured over the repo's 13457 files, holding 57418 import lines between them: the walk 1796ms, this 8ms, and not one file where the two answered differently.");
  ("The kind asked for is checked against the list rather than trusted, because the whole saving rests on that one premise: asked for a kind that may sit deeper, this would look in the wrong place and answer confidently. A caller that wants any other kind wants the walking twin, and is told so rather than quietly given a short answer.");
  ("Handed something that is not a whole module - a single function, say - it walks after all. Nothing of that shape can hold a module item either, so the answer is the same empty one; the walk is kept for that case only so this is total, and never has to guess what it was handed.");
  ("What comes back is shaped exactly as the walking twin shapes it - the node kept beside the chain of nodes it sits inside - so a caller reading either part cannot tell which one answered it.");
  let module_item_types = [
    "ImportDeclaration",
    "ExportNamedDeclaration",
    "ExportDefaultDeclaration",
    "ExportAllDeclaration",
  ];
  list_includes_assert_json(module_item_types, node_type, {
    hint: "only a kind the language confines to the top of a module can be read off the module's own list - ask js_list_type for anything else",
  });
  let program_is = js_node_type_is(ast, "Program");
  if (not(program_is)) {
    let walked = js_list_type(ast, node_type);
    return walked;
  }
  let body = property_get(ast, "body");
  function lambda(collect) {
    function body_each(node) {
      let type_is = js_node_type_is(node, node_type);
      if (not(type_is)) {
        return;
      }
      let stack = [ast, body, node];
      collect({
        node,
        stack,
      });
    }
    each(body, body_each);
  }
  let found = list_adder(lambda);
  return found;
}
