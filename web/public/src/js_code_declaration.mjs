import { js_code_declaration_args } from "./js_code_declaration_args.mjs";
export function js_code_declaration(f_name, inside, async_is) {
  let args = [];
  let code = js_code_declaration_args(async_is, f_name, args, inside);
  return code;
}
