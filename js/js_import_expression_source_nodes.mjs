import { fn_name } from "./fn_name.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { list_map } from "./list_map.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export function js_import_expression_source_nodes(ast) {
  ("the piece of writing that names the file in every fetch-it-while-running import - the one inside the brackets of import(...), as against the one after the word from, which ",
    fn_name("js_import_source_nodes"),
    " answers for.");
  ("Anything rewriting the writing in a file wants both, and for the same reason: the builder READS this word to decide which file to set aside as a piece of its own. A word it cannot read leaves it guessing, and what it does when it guesses is take in the whole folder.");
  let expressions = js_list_type(ast, "ImportExpression");
  function lambda(v) {
    let source = property_path_get_2(v, "node", "source");
    return source;
  }
  let sources = list_map(expressions, lambda);
  return sources;
}
