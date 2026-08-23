import { js_parse } from "./js_parse.mjs";
import { js_object_property_text_set } from "./js_object_property_text_set.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_object_property_text_set(code, key, text) {
  "$plain key";
  "$plain text";
  "This written-out code as it stands after the named object property has had a new written-out word put in place of the one it held.";
  "It takes written-out code and hands written-out code back, so a case can say exactly what it expects to be left. The step itself works on a tree, which a corpus cannot write down - and printing the tree back out is not a formality here: the fault this step exists to avoid is a write that changes the value and not the spelling, which leaves the file byte for byte what it was while nothing throws. Only the printed code shows that, so only the printed code is worth comparing.";
  let ast = js_parse(code);
  js_object_property_text_set(ast, key, text);
  let after = js_unparse(ast);
  return after;
}
