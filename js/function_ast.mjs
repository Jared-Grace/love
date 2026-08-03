import { property_get } from "./property_get.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_ast(f_name) {
  "The parsed shape of a function's whole file, for a transform that wants to look at the code rather than at its text.";
  let parsed = await function_parse(f_name);
  let ast = property_get(parsed, "ast");
  return ast;
}
