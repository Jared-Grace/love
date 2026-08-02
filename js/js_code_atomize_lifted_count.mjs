import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_parse } from "./js_parse.mjs";
import { subtract } from "./subtract.mjs";
export async function js_code_atomize_lifted_count(code) {
  "How many calls the lifting pass takes out of this written-out code and gives a name of their own above it";
  "Counted rather than read out, because what the count is measuring is whether the pass held back, and a held-back pass leaves the code exactly as it was written - a shape a reader comparing words could not tell from a pass that had stopped working";
  "A name is given to a call and to nothing else, so counting the names before and after counts the calls taken out";
  "The code is put inside a function first, because a lifted name is put in the innermost block above the call and the outermost level of a file is not a block. Real code is always inside a function anyway, so this asks the same question the pass is asked every day rather than a narrower one";
  let wrapped = text_combine_multiple(["function held() {\n", code, "}\n"]);
  let ast = js_parse(wrapped);
  let before = js_list_type(ast, "VariableDeclarator");
  await js_atomize(ast);
  let after = js_list_type(ast, "VariableDeclarator");
  let lifted = subtract(after.length, before.length);
  return lifted;
}
