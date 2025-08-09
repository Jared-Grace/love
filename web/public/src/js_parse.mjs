import {log} from './log.mjs';
import * as acorn from "acorn";
export function js_parse(code) {
  let ast = null;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: "module"
    });
  } catch (e) {
    log(code);
    throw e
  }
  return ast;
}
