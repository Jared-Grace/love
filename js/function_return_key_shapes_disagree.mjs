import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_return_key_shapes } from "./js_function_return_key_shapes.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { not } from "./not.mjs";
import { list_unique } from "./list_unique.mjs";
export async function function_return_key_shapes_disagree(f_name) {
  arguments_assert(arguments, 1);
  ("$plain f_name");
  ("The sets of keys a function's file answers with when its ways out do not all offer the same words - and nothing at all when they agree, which is the ordinary case.");
  ("Every function written in the file is asked, not only the one the file is named for, because a small function written inside another is answered to by the code around it in exactly the same way and can disagree with itself in exactly the same way.");
  ("This is the shape a rename can break without breaking anything a reader would notice. An entry written in the short form is one word doing two jobs at once - a local, and the key that local is emitted under - so a rename of the local rewrites the key with it, and every caller still asking for the old word reads nothing. Nothing throws, nothing fails to parse, no import goes missing; the value simply stops arriving. It happened to the reader that splits a line of usfm, and while it was broken every chapter of every bible on this disk threw.");
  let ast = await function_ast(f_name);
  let found = [];
  function function_visit(visited) {
    let node = property_get(visited, "node");
    let shapes = js_function_return_key_shapes(node);
    let several = greater_than(shapes.length, 1);
    if (several) {
      for (let one of shapes) {
        list_add(found, one);
      }
    }
  }
  js_visit_function_nodes(ast, function_visit);
  let any = greater_than(found.length, 0);
  if (not(any)) {
    return null;
  }
  let r = {
    name: f_name,
    shapes: list_unique(found),
  };
  return r;
}
