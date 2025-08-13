import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { generate } from "astring";
export async function js_unparse(ast) {
  let output;
  try {
    output = generate(ast);
  } catch (e) {
    let { Validator } = await import_install("shift-validator");
    const validator = new Validator();
    log({
      validator,
    });
    const errors = Validator.validate(ast);
    if (errors.length > 0) {
      console.error("The AST is invalid. Errors:", errors);
    }
  }
  return output;
}
