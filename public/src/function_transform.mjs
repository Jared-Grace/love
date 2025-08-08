import { function_unparse } from "./function_unparse.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_transform(f_name, lambda) {
  let ast = await function_parse(f_name);
  lambda(ast);
  await function_unparse(f_name, ast);
}
