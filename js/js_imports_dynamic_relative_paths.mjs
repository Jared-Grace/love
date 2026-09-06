import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_starts_with } from "./property_starts_with.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
export function js_imports_dynamic_relative_paths(ast) {
  "The files a DYNAMIC import names by where they sit rather than by a package name - every source written starting with a dot, given back as written";
  "Its static twin next door reads ImportDeclaration, which is every import written at the top of a file. A file that reaches for a module part way down its body, inside a branch, writes an ImportExpression instead, and the twin cannot see one at all - so a whole family of files looked as though they imported nothing.";
  "That blindness had a cost. The picture Bible keeps one lookup that reaches for a chapter's lines by name and does it this way, once per chapter, inside a branch. Nothing in the repo could see those hundred and forty four imports, so nothing could notice that seven of them named a file that was not there. The tear was found by hand after nine deployments died on it.";
  "A source that is not a plain string is left out rather than guessed at. An import whose path is computed names no one file, so there is nothing here to check it against, and answering with a guess would be worse than answering with silence.";
  arguments_assert(arguments, 1);
  let nodes = js_list_type_nodes(ast, "ImportExpression");
  let sources = list_map_property(nodes, "source");
  function dotted(source) {
    let starts = property_starts_with(source, "value", ".");
    return starts;
  }
  let paths = list_filter_map_property(sources, dotted, "value");
  return paths;
}
