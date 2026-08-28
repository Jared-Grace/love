import { property_equals_not } from "./property_equals_not.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function app_code_lesson_source_above_text_or_null(source) {
  arguments_assert(arguments, 1);
  ("the code of the telling a lesson hands over as its above, or nothing when the lesson hands none over.");
  ("A lesson gives its maker one thing under the key above, and that one thing draws everything the learner reads before the first question. Finding it is what lets the rest of the telling be followed: whatever this code names, the learner sees.");
  ("Written out as text rather than handed back as a tree, because the only question asked of it afterwards is which of the lesson's own files it names, and a name is a word in the text.");
  ("A telling kept in a file of its own is answered with nothing here rather than with that file's code, and nothing is the right answer: the caller already counts a file the lesson hands over by name, so following it twice would add nothing and reading it from here would need the repo, which this is deliberately free of.");
  let ast = js_parse(source);
  let properties = js_list_type(ast, "Property");
  let value = null;
  for (let v of properties) {
    let node = property_get(v, "node");
    let key = property_get(node, "key");
    let above_is = property_get_or_null_equal(key, "name", "above");
    if (above_is) {
      value = property_get(node, "value");
    }
  }
  let none = null_is(value);
  if (none) {
    return null;
  }
  let not_named = property_equals_not(value, "type", "Identifier");
  if (not_named) {
    let written = js_unparse(value);
    return written;
  }
  let name = property_get(value, "name");
  let declarations = js_list_type(ast, "FunctionDeclaration");
  for (let v of declarations) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    let same = property_get_or_null_equal(id, "name", name);
    if (same) {
      let written = js_unparse(node);
      return written;
    }
  }
  let r = "";
  return r;
}
