import { module_acorn_get } from "./module_acorn_get.mjs";
import { js_parse_generic_arg } from "./js_parse_generic_arg.mjs";
import { property_set } from "./property_set.mjs";
export function js_comments_get(code) {
  "Every comment in a piece of source, each with the span it occupies. The parser is asked rather than the text searched, because two slashes inside a string or a template literal read exactly like the start of a comment and only the parser can tell the two apart.";
  "The tree the parse produces is thrown away on purpose. This is asked at the one moment the tree cannot answer it: acorn drops comments unless it is handed somewhere to put them, so by the time any transform sees a tree the comments are already gone, which is precisely why running the normalize pipeline over a file deletes them.";
  let acorn = module_acorn_get();
  let comments = [];
  let options = js_parse_generic_arg();
  property_set(options, "onComment", comments);
  acorn.parse(code, options);
  return comments;
}
