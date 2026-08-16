import { arguments_assert } from "./arguments_assert.mjs";
import { js_atomize_function } from "./js_atomize_function.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_parse } from "./js_parse.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function js_code_atomize_function_lifted_count(code) {
  "How many functions written inside a call the lifting pass takes out of this written-out code and declares above it.";
  "Counted rather than read out, for the same reason its sibling counts: what the count is measuring is whether the pass held back, and a held-back pass leaves the code exactly as it was written - a shape a reader comparing words could not tell from a pass that had stopped working.";
  "Declarations are counted, not names, because a lifted function keeps the name it was written with. Two lifted side by side under one name would read as one name and count as two declarations, which is the very thing being asked about.";
  "The code is put inside a function first, because a lifted declaration goes in the innermost block above the call and the outermost level of a file is not a block. Real code is always inside a function anyway.";
  arguments_assert(arguments, 1);
  let wrapped = text_combine_multiple(["function held() {\n", code, "}\n"]);
  let ast = js_parse(wrapped);
  let before = js_list_type(ast, "FunctionDeclaration");
  await js_atomize_function(ast);
  let after = js_list_type(ast, "FunctionDeclaration");
  let lifted = subtract(after.length, before.length);
  return lifted;
}
