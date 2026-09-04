import { arguments_assert } from "./arguments_assert.mjs";
import { js_import_source_nodes } from "./js_import_source_nodes.mjs";
import { js_import_expression_source_nodes } from "./js_import_expression_source_nodes.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_nodes_literal_values } from "./js_nodes_literal_values.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
export function js_imports_module_names(ast) {
  "Every package a file brings in by name rather than by path, whether it says so at the top or fetches it while running.";
  "Both kinds are answered together because to the question this is asked for - can a browser run this file - the difference between the two spellings is nothing at all. A reader that knew only one of them was the whole of a hole: a server library was fetched while running, and the reading that was supposed to notice looked only for the word from.";
  "A name spelt with the node scheme in front of it is answered without it, so that one module is one name however the file happened to write it. Node's own list of what it carries is spelt without the scheme, and a comparison against that list is the whole use of this.";
  "A source that is not a plain piece of writing is passed over rather than guessed at - a fetched address built out of pieces names no one package, and the whole point of building it that way was that nothing could tell which. That setting aside is asked for rather than written out here, because the reader next door wanted the same thing of the same nodes.";
  arguments_assert(arguments, 1);
  let from_nodes = js_import_source_nodes(ast);
  let expression_nodes = js_import_expression_source_nodes(ast);
  let nodes = list_concat(from_nodes, expression_nodes);
  let sources = js_nodes_literal_values(nodes);
  function package_is(source) {
    let outside = text_starts_with_not(source, ".");
    return outside;
  }
  let packages = list_filter(sources, package_is);
  let scheme = "node:";
  function scheme_without(source) {
    let prefixed = text_starts_with(source, scheme);
    if (prefixed) {
      let unprefixed = text_prefix_without(source, scheme);
      return unprefixed;
    }
    return source;
  }
  let names = list_map_unique(packages, scheme_without);
  return names;
}
