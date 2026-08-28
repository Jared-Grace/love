import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_ast_return_key_shapes_disagreeing } from "./js_ast_return_key_shapes_disagreeing.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function function_return_key_shapes_disagree(f_name) {
  arguments_assert(arguments, 1);
  ("$plain f_name");
  ("The sets of keys a function's file answers with when its ways out do not all offer the same words - and nothing at all when they agree, which is the ordinary case.");
  ("This is the shape a rename can break without breaking anything a reader would notice. An entry written in the short form is one word doing two jobs at once - a local, and the key that local is emitted under - so a rename of the local rewrites the key with it, and every caller still asking for the old word reads nothing. Nothing throws, nothing fails to parse, no import goes missing; the value simply stops arriving. It happened to the reader that splits a line of usfm, and while it was broken every chapter of every bible on this disk threw.");
  ("The looking is not done here, so that the corpus of written-out cases can ask the same question of the same code. A gate whose cases exercise a copy of the reading proves the copy.");
  let ast = await function_ast(f_name);
  let shapes = js_ast_return_key_shapes_disagreeing(ast);
  let any = greater_than(shapes.length, 0);
  if (not(any)) {
    return null;
  }
  let r = {
    name: f_name,
    shapes: shapes,
  };
  return r;
}
