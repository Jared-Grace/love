import { arguments_assert } from "./arguments_assert.mjs";
import { js_names_blank } from "./js_names_blank.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_statements_shape(statements, personal) {
  arguments_assert(arguments, 2);
  ("What a run of statements does, with the private names taken away, so that the");
  ("same run written inside two different functions lands on the same text.");
  ("The sibling of the whole-function shape, and it exists because duplication is");
  ("not only whole. Eight functions ending in the same four lines share as much");
  ("code as two functions that are twins, and nothing here could see it: the");
  ("whole-function shape asks about a function entire, so a shared ending sitting");
  ("under eight different beginnings reads as eight different functions.");
  ("The names are given rather than worked out, because a run of statements does");
  ("not know what encloses it. The caller knows, and the caller is what has the");
  ("function around them.");
  ("This changes the statements it is given, so hand it a parse nothing else is");
  ("holding.");
  let block = {
    type: "BlockStatement",
    body: statements,
  };
  js_names_blank(block, personal);
  let shape = js_unparse(block);
  return shape;
}
