import { import_install } from "./import_install.mjs";
import { generate } from "astring";
export function js_unparse(ast) {
  let output;
  try {
    output = generate(ast);
  } catch (e) {
    import_install();
  }
  return output;
}
