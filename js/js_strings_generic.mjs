import { js_literals_generic } from "./js_literals_generic.mjs";
import { text_is } from "./text_is.mjs";
export function js_strings_generic(ast) {
  "Every written-out word in one file, each kept beside the place in the file it stands.";
  let results = js_literals_generic(ast, text_is);
  return results;
}
