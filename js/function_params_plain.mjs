import { function_ast } from "./function_ast.mjs";
import { function_params_plain_ast } from "./function_params_plain_ast.mjs";
export async function function_params_plain(unaliased) {
  "The parameters this function declares to carry ordinary data, named one per marker in its own body.";
  "A marker naming a parameter the function does not declare matches nothing and so changes nothing, which is the direction a mistake here has to fail in.";
  "Finding the function and reading it is all this adds. The answer itself is read off the tree, so a caller that already holds one asks that one directly and pays for the reading once rather than once per question.";
  let ast = await function_ast(unaliased);
  let names = function_params_plain_ast(ast);
  return names;
}
