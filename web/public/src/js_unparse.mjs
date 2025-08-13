import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { generate } from "astring";
export async function js_unparse(ast) {
  let output;
  try {
    output = generate(ast);
  } catch (e) {throw e}
  return output;
}
