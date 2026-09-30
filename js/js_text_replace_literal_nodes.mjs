import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_text_replace_literal_nodes(ast) {
  arguments_assert(arguments, 1);
  ("Every string handed to a text's own find-and-replace, which are edits to words the function was handed rather than words it says.");
  ("A hunt for words a function says out loud has to take these out, for the reason it already takes out an arrow put in front of handed words: a function that reshapes what it was given says nothing of its own. The one that respells a Hebrew pronunciation into what the voice says types out only sounds - w for v, a long o dropped - and was named as saying english to a reader who picked another language, when nothing it writes is in any language a reader picks.");
  ("Only what is handed in is read, never what it was called on. The text a replace is called on can be a word somebody wrote, and that run is still counted wherever it was typed.");
  ("REJECTED: taking out only the pattern and keeping the replacement. The replacement in a respelling is itself a sound and not a word, so keeping it leaves the same false finding standing. The cost of the choice taken is a replacement that pastes a real sentence into handed text now passes unseen - none was known when this was written.");
  let literals = [];
  for (let node of js_list_type_nodes(ast, "CallExpression")) {
    let callee = property_get(node, "callee");
    let reached_is = js_node_type_is(callee, "MemberExpression");
    if (not(reached_is)) {
      continue;
    }
    let named = property_get(callee, "property");
    let plain_is = js_node_type_is(named, "Identifier");
    if (not(plain_is)) {
      continue;
    }
    let name = property_get(named, "name");
    let replace_is = list_includes(["replace", "replaceAll"], name);
    if (not(replace_is)) {
      continue;
    }
    let handed = property_get(node, "arguments");
    for (let given of handed) {
      let parts = js_list_type_nodes(given, "Literal");
      list_add_multiple(literals, parts);
    }
  }
  return literals;
}
