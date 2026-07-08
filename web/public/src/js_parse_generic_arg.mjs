import { js_parse_ecma_version } from "../../../love/public/src/js_parse_ecma_version.mjs";
export function js_parse_generic_arg() {
  let r = {
    ecmaVersion: js_parse_ecma_version(),
    sourceType: "module",
  };
  return r;
}
