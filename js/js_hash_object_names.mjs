import { js_hash_object_names_written } from "./js_hash_object_names_written.mjs";
import { js_hash_object_names_handled } from "./js_hash_object_names_handled.mjs";
import { js_hash_object_names_declared } from "./js_hash_object_names_declared.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_hash_object_names(ast) {
  "The names this file gives to the object a page's address is read into, so a reading can tell a word written into somebody's link apart from a word written into any other object.";
  "Asked of the code rather than of a naming habit. Every one of these is called hash today, and a reading that trusted the word would go on agreeing with itself right up until somebody chose a different one - which is the moment it would matter.";
  "Three ways to come by one. Reading the address gives you it directly. Changing the address hands it to a function you wrote, and that function's first parameter is the same object under whatever name that function chose. Building a link for another tab starts from an empty object that is an address only because of what is done with it at the end.";
  arguments_assert(arguments, 1);
  let names = [];
  function declared(v) {
    let r = js_hash_object_names_declared(v, names);
    return r;
  }
  js_visit_type(ast, "VariableDeclarator", declared);
  let handed = [];
  function handled(v2) {
    let r2 = js_hash_object_names_handled(v2, names, handed);
    return r2;
  }
  js_visit_type(ast, "CallExpression", handled);
  function written(v3) {
    let r3 = js_hash_object_names_written(v3, handed, names);
    return r3;
  }
  js_visit_type(ast, "FunctionDeclaration", written);
  return names;
}
