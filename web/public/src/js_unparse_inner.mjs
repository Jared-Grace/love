import { marker } from "../../../love/public/src/marker.mjs";
import { generate } from "astring";
export function js_unparse_inner(ast) {
  marker("1");
  let output = generate(ast);
  return output;
}
