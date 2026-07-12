import { js_parse_ecma_version } from "./js_parse_ecma_version.mjs";
export function js_parse_generic_arg() {
  let a = {
    ecmaVersion: js_parse_ecma_version(),
    sourceType: "module",
  };
  return a;
}
