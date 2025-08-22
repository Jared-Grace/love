import * as acorn from "acorn";
import { log_keep } from "./log_keep.mjs";
export function js_parse(code) {
  let ast = null;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: "module",
    });
  } catch (e) {
    log_keep(code);
    throw e;
  }
  return ast;
}
