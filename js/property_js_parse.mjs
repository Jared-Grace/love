import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
export function property_js_parse(object, property_name) {
  arguments_assert(arguments, 2);
  ("The written-out code held under this name, read in as a tree.");
  ("Every gate over a corpus of written cases begins this way - take the source out");
  ("of the case, read it in, then ask the question of the tree - and the text in");
  ("between is never looked at again once it has been read.");
  let code = property_get(object, property_name);
  let ast = js_parse(code);
  return ast;
}
